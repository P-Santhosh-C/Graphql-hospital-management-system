const Registeruser = require("./Model");
const AppointmentReq = require("./AppointmentModel");
const DoctorRegister = require("./DoctorModel");

const resolvers = {
  Query: {
    getAllRegisters: async () => {
      return await Registeruser.find();
    },
    getAllDoctors: async () => {
      return await DoctorRegister.find();
    },
    getAllAppointment: async () => {
      return await AppointmentReq.find();
    },
    getUserById: async (parent, { id }, context, info) => {
      return await Registeruser.findById(id);
    },
    getDoctorById: async (parent, { id }, context, info) => {
      return await DoctorRegister.findById(id);
    },
    getAppointmentById: async (parent, { id }, context, info) => {
      return await AppointmentReq.findById(id);
    },
  },

  Mutation: {
    createUser: async (parent, args, context, info) => {
      const { userName, email, cell, category, password, confirmpassword } =
        args.registerUser;
      const registeruser = new Registeruser({
        userName,
        email,
        cell,
        category,
        password,
        confirmpassword,
      });
      await registeruser.save();
      return registeruser;
    },
    createDoctor: async (parent, args, context, info) => {
      const {
        userName,
        email,
        cell,
        category,
        password,
        confirmpassword,
        specialist,
      } = args.doctorRegister;
      const doctorregister = new DoctorRegister({
        userName,
        email,
        cell,
        category,
        password,
        confirmpassword,
        specialist,
      });
      await doctorregister.save();
      return doctorregister;
    },
    createAppointment: async (parent, args, context, info) => {
      const { patientName, doctorName, problem, appStatus, date } =
        args.appointmentReq;
      const appointmentReq = new AppointmentReq({
        patientName,
        doctorName,
        problem,
        appStatus,
        date,
      });
      await appointmentReq.save();
      return appointmentReq;
    },
    deleteDoctor: async (parent, args, context, info) => {
      const { id } = args;
      await DoctorRegister.findByIdAndDelete(id);
      return "Doctor is deleted";
    },
    deleteUser: async (parent, args, context, info) => {
      const { id } = args;
      await Registeruser.findByIdAndDelete(id);
      return "User is deleted";
    },
    updateDoctor: async (parent, args, context, info) => {
      const { id } = args;
      const { userName, email, cell, category, password, confirmpassword } =
        args.registerUser;
      const updates = {};
      if (userName !== undefined) {
        updates.userName = userName;
      }
      if (email !== undefined) {
        updates.email = email;
      }
      if (cell !== undefined) {
        updates.cell = cell;
      }
      if (category !== undefined) {
        updates.category = category;
      }
      if (password !== undefined) {
        updates.password = password;
      }
      if (confirmpassword !== undefined) {
        updates.confirmpassword = confirmpassword;
      }
      const registerUser = await Registeruser.findByIdAndUpdate(id, updates, {
        new: true,
      });
      return registerUser;
    },
  },
};

module.exports = resolvers;
