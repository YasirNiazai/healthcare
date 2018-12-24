import React,{Component} from 'react';
import {Table} from "semantic-ui-react";


class AppointmentRow extends Component {
  render(){
  const {Row , Cell} = Table;
  const {appointment} = this.props;
    return(
      <Row>
      <Cell>{appointment.appointmentId.toNumber()}</Cell>
      <Cell>{appointment.patientId.toNumber()}</Cell>
      <Cell>{appointment.doctorId.toNumber()}</Cell>
      <Cell>{appointment.date}</Cell>
      <Cell>{appointment.chiefComplaint}</Cell>
      <Cell>{appointment.hash}</Cell>

      </Row>
    );



  }

}
export default AppointmentRow;
