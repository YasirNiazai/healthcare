pragma solidity ^0.4.24;
import "./Receptionist.sol";
contract Patient{

    ReceptionsitFactory factory;
    string public patientName;
    uint public patientId;
    string public gender;
    uint public age;
    address public manager;

    struct Appointment{
        uint appointmentId;
        uint patientId;
        uint doctorId;
        string date;
        string chiefComplaint;
        string hash;
        bool completed;
    }
    uint[] public appointmentsList;


    mapping(uint=>Appointment) public appointments;

    constructor( uint _PatientId  , string _patientName, string _gender, uint _age , address _account){
        patientName = _patientName;
        gender = _gender;
        age = _age;
        manager = _account;
        patientId = _PatientId;

    }


    function getManager() public view returns(address){
        return (manager);
    }


      function getPatientName() public view returns( string){
          return(patientName);
      }


      function addAppointment(uint _AppointmentId, uint _PatientId , uint _DoctorId , string _Date , string _chiefComplaint) public{
          Appointment memory newAppointment = Appointment({
              appointmentId : _AppointmentId ,
              patientId : _PatientId ,
              doctorId : _DoctorId ,
              date : _Date ,
              chiefComplaint : _chiefComplaint,
              hash : '',
              completed: false


          });

          appointments[_AppointmentId]=newAppointment;

          appointmentsList.push(_AppointmentId);
      }


    function getSummary(uint _PatientId) public view returns(uint , string , string , uint , address){
              return(patientId , patientName , gender , age , manager);
            }


    function addPrescription(uint appointmentId , string prescription) public returns(uint){
            appointments[appointmentId].hash = prescription;
            appointments[appointmentId].completed = true;

    }

    function getAppointmentList() public view returns(uint){
        return appointmentsList.length;
    }
}
