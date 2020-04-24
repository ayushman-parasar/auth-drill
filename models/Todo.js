const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isCompleted:{
      type: Boolean,
      default: false
  }
});

const Student = mongoose.model("Student", taskSchema)
export default Student
