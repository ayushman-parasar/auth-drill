const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema({
  name: {
    type: "String",
    required: true,
  },
  emailId: {
    Type: "String",
    required: true,
  },
  password: {
    Type: "String",
    required: true,
  },
  batchNumber: {
    Type: "String",
  },
});

const Student = mongoose.model("Student", studentSchema)
export default Student
