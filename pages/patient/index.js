import React, { Component } from "react";
import Layout from "../../components/patientLayout";
import ReceptionistFactory from "../../build/contracts/ReceptionsitFactory.json";
import Patient from "../../build/contracts/Patient.json";
import AppointmentRow from'../../components/AppointmentRow';
import truffleContract from "truffle-contract";
import {
  Card,
  Button,
  Tab,
  Form,
  Input,
  Dropdown,
  Table,
  Message
} from "semantic-ui-react";
import Link from "../../routes";
import web3 from "../../ethereum/web3";

class patient extends Component {

static async getInitialProps() {
const accounts= await web3.eth.getAccounts();
console.log(accounts[0]);
const factory = truffleContract(ReceptionistFactory);
factory.setProvider(web3.currentProvider);
const instanceFactory = await factory.deployed();
console.log(instanceFactory);
const patient = truffleContract(Patient);
patient.setProvider(web3.currentProvider);
const patientAddress = await instanceFactory.accountToAddressPatient.call(accounts[0]);
const patientContract =  await patient.at(patientAddress);
console.log("patient address :" , patientContract);
const patientId = await patientContract.patientId.call();
const summary = await patientContract.getSummary.call(patientId);
console.log(summary);
const appointmentList = await patientContract.getAppointmentList.call();
console.log(appointmentList);

const appointmentListData = await Promise.all(
  Array(parseInt(appointmentList))
    .fill()
    .map(async (element, index) => {
      const appointmentId = await patientContract.appointmentsList.call(index);
      return   patientContract.appointments.call(appointmentId)

    })
)
console.log("Appointment Data:",appointmentListData);
return {
  patient: patientContract,
  appointmentListData: appointmentListData,
  account: accounts[0],
  patientId : summary[0].toNumber(),
  patientName : summary[1],
  patientGender : summary[2],
  patientAge : summary[3].toNumber(),
  patientAccount: summary[4],
  patientAddress:patientAddress
};


}

state = {
appointmentIdResult: "",
appointmentIdSearch: "",
patientIdResult: "",
doctorIdresult: "",
dateResult: "",
chepComplaintResult: ""
}
  //
  //  renderAppointment () {
  //    const {appointmentListData} = this.props;
  //    console.log("reder appointment",appointmentListData);
  //
  //    const items = this.props.appointmentListData.map((element, index) => {
  //      const address = element[3];
  //      return {
  //         appointmentId :  element[0].toNumber()
  //
  //               };
  //    });
  //
  // };

  renderRow(){

    return this.props.appointmentListData.map((appointment,index)=>{
      return( <AppointmentRow
      key={index}
      appointment={appointment}
      address={this.props.patientAddress}
      />
    );
  });
}


onSearchAppointment = async event => {
  event.preventDefault();
const patient = this.props.patient;
console.log(patient);

    const appointmentResult = await patient.appointments.call(
    parseInt(this.state.appointmentIdSearch)
  );
  console.log(appointmentResult);
  this.setState({
    appointmentIdResult: appointmentResult[0].toNumber(),
    patientIdResult: appointmentResult[1].toNumber(),
    doctorIdresult: appointmentResult[2].toNumber(),
    dateResult: appointmentResult[3],
    chepComplaintResult: appointmentResult[4]
  });
  // console.log(this.state.appointmentResult);
  this.onSearch();
};


onSearch = () => {
  if (this.state.appointmentIdResult) {
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Appointement Id</Table.HeaderCell>
            <Table.HeaderCell>Patient Id</Table.HeaderCell>
            <Table.HeaderCell>Doctor Id</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Chep Complaint</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{this.state.appointmentIdResult}</Table.Cell>
            <Table.Cell>{this.state.patientIdResult}</Table.Cell>
            <Table.Cell>{this.state.doctorIdresult}</Table.Cell>
            <Table.Cell>{this.state.dateResult}</Table.Cell>
            <Table.Cell>{this.state.chepComplaintResult}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  } else {
    return <h1>No Record Found</h1>;
  }
};

onAppointmentIdSearch = event =>{
  this.setState({appointmentIdSearch: event.target.value})
};

  renderTabs() {

    const {Header,Row,HeaderCell,Body}=Table;



    const panes = [
      {
        menuItem: "View Record",
        render: () => (
          <Tab.Pane attached={false}>
            <h1>Patient Record of Health-care</h1>
            <Table>
             <Header>
              <Row>
               <HeaderCell>Appointment ID</HeaderCell>
               <HeaderCell>Patient ID</HeaderCell>
               <HeaderCell>Doctor ID</HeaderCell>
               <HeaderCell>Date</HeaderCell>
               <HeaderCell>Chief Complaint</HeaderCell>
               <HeaderCell>Hash</HeaderCell>
               <HeaderCell>Completed</HeaderCell>

              </Row>
             </Header>

             <Body>{this.renderRow()}</Body>

            </Table>


          </Tab.Pane>
        )
      },
      {
        menuItem: "Search Appointment",
        render: () => (
          <Tab.Pane attached={false}>
            <h1>Search Appointment</h1>
            <Form onSubmit={this.onSearchAppointment}>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>Appointment Id</label>
                  <Input
                    value={this.state.appointmentIdSearch}
                    onChange={this.onAppointmentIdSearch}
                  />
                </Form.Field>

                <Button primary> Search Appointment </Button>
              </Form.Group>
            </Form>
            {this.onSearch()}
          </Tab.Pane>
        )
      }
    ];
    return <Tab menu={{ attached: false }} panes={panes} />;
  }
  render() {
    return (
      <Layout>
        <div>
          <div
            style={{
              backgroundColor: "#4267b2",
              color: "white",
              marginTop: 10,
              borderRadius: 4,
              padding: 10,
              paddingLeft: 50,
              margin: 10,
              fontFamily: "Times New Roman, Times, serif",
              fontSize: 20
            }}
          >
            <div>Patient Name: {this.props.patientName}</div>
           <div>Patient Id:{this.props.patientId}</div>
            <div>Patient Gender:{this.props.patientGender}</div>
           <div>Patient Age:{this.props.patientAge}</div>
            <div>Patient Account: {this.props.patientAccount}</div>
          </div>
        </div>
        <div>{this.renderTabs()}</div>
      </Layout>
    );
  }
}
export default patient;
