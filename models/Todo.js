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

const Todo = mongoose.model("Todo", taskSchema)
module.exports = Todo
