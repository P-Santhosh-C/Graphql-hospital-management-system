import { gql } from "@apollo/client";

export const getRegisters = gql`
  query Query {
    getAllRegisters {
      id
      userName
      email
      cell
    }
  }
`;

export const getDoctors = gql`
  query Query {
    getAllDoctors {
      id
      userName
      email
      cell
      specialist
    }
  }
`;

export const getAppointment = gql`
  query Query {
    getAllAppointment {
      id
      doctorName
      problem
      appStatus
      date
    }
  }
`;
