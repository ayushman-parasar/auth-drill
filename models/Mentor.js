const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const mentorSchema = new Schema({
  name: {
    type: String,
  
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


// Hash password for new mentor while registering
mentorSchema.pre("save", function (next) {
  console.log("pre save",this.password)
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

//Hash password while comparing at the time of login
 mentorSchema.methods.validatePassword = async function(password){
     console.log(this.password)
     return await bcrypt.compare(password, this.password)
 }
const Mentor = mongoose.model("Mentor", mentorSchema)
module.exports = Mentor
