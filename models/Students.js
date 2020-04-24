const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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

const Student = mongoose.model("Student", studentSchema)
module.exports = Student
