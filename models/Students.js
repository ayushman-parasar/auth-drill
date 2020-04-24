const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  batchNumber: {
    type: String,
  },
});

//Hash password for new student while registering.
studentSchema.pre("save", function (next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

//Hash password while comparing at the time of login
studentSchema.methods.validatePassword = function (password) {
    console.log("password validation")
  return bcrypt.compareSync(password, this.password);
};



const Student = mongoose.model("Student", studentSchema)
module.exports = Student