const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      validator.isEmpty("Invalid email");
    },
  },
  password: {
    type: String,
    required: true,
  },
});

schema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
    console.log(this.password);
  }
  next();
});

const Register = new mongoose.model("Register", schema);

module.exports = Register;