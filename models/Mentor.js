const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mentorSchema = new Schema({
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
  }
});

const Mentor = mongoose.model("Mentor", mentorSchema)
module.exports = Mentor
