const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Registeruser {
    id: ID
    userName: String
    email: String
    cell: String
    category: String
    password: String
    confirmpassword: String
  }

  type DoctorRegister {
    id: ID
    userName: String
    email: String
    cell: String
    category: String
    password: String
    confirmpassword: String
    specialist: String
  }

  type AppointmentReq {
    id: ID
    patientName: String
    doctorName: String
    problem: String
    appStatus: String
    date: String
  }

  type Query {
    getAllRegisters: [Registeruser]
    getAllDoctors: [DoctorRegister]
    getAllAppointment: [AppointmentReq]
    getUserById(id: ID): Registeruser
    getDoctorById(id: ID): DoctorRegister
    getAppointmentById(id: ID): AppointmentReq
  }

  input RegisterUserInput {
    userName: String
    email: String
    cell: String
    category: String
    password: String
    confirmpassword: String
  }

  input DoctorRegisterInput {
    userName: String
    email: String
    cell: String
    category: String
    password: String
    confirmpassword: String
    specialist: String
  }

  input AppointmentInput {
    patientName: String
    doctorName: String
    problem: String
    appStatus: String
    date: String
  }

  type Mutation {
    createUser(registerUser: RegisterUserInput): Registeruser
    createDoctor(doctorRegister: DoctorRegisterInput): DoctorRegister
    createAppointment(appointmentReq: AppointmentInput): AppointmentReq
    deleteDoctor(id: ID): String
    deleteUser(id: ID): String
    updateDoctor(id: ID, registerUser: RegisterUserInput): Registeruser
  }
`;

module.exports = typeDefs;