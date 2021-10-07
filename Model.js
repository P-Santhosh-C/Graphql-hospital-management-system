const mongoose = require("mongoose");

let Registeruser = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cell: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    requried: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Registeruser", Registeruser);
