import { gql } from "@apollo/client";

export const ADD_PATIENT = gql`
  mutation createUser(
    $userName: String
    $email: String
    $cell: String
    $category: String
    $password: String
    $confirmpassword: String
  ) {
    createUser(
      registerUser: {
        userName: $userName
        email: $email
        cell: $cell
        category: $category
        password: $password
        confirmpassword: $confirmpassword
      }
    ) {
      id
      userName
      email
      cell
      category
      password
      confirmpassword
    }
  }
`;

export const ADD_DOCTOR = gql`
  mutation createDoctor(
    $userName: String
    $email: String
    $cell: String
    $category: String
    $specialist: String
    $password: String
    $confirmpassword: String
  ) {
    createDoctor(
      doctorRegister: {
        userName: $userName
        email: $email
        cell: $cell
        category: $category
        specialist: $specialist
        password: $password
        confirmpassword: $confirmpassword
      }
    ) {
      id
      userName
      email
      cell
      category
      specialist
      password
      confirmpassword
    }
  }
`;

export const APP_BOOKING = gql`
  mutation createAppointment(
    $patientName: String
    $doctorName: String
    $problem: String
    $appStatus: String
    $date: String
  ) {
    createAppointment(
      appointmentReq: {
        patientName: $patientName
        doctorName: $doctorName
        problem: $problem
        appStatus: $appStatus
        date: $date
      }
    ) {
      id
      patientName
      doctorName
      problem
      appStatus
      date
    }
  }
`;

