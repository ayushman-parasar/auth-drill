const Mentor = require("../models/Mentors");
const Todo = require('../models/Todo')

exports.createMentor = async (req, res, next) => {
  try {
    const mentor = await Mentor.create(req.body);
    res.json(mentor);
  } catch (error) {
    next(error);
  }
};

exports.loginMentor = async (req, res, next)=>{
  try {
    let { emailId, password } = req.body;
    let mentor = await Mentor.findOne({ emailId });
    // console.log("mentor1",mentor)
    const mentors = [{
      name: "suraj",
      emailId: "m1@gmail.com",
      password: "hello",
    },
    {
      name: "Suraj",
      emailId: "m2@gmail.com",
      password: "hello",
    },
    {
      name: "prashant",
      emailId: "m3@gmail.com",
      password: "hello",
    },
    {
      name: "ankit",
      emailId: "m4@gmail.com",
      password: "hello",
    }
  ]
  if(!mentor){
    for( men of mentors){
      var newMentor = await new Mentor(men)
      await newMentor.save()
     }
  }
  let recheckMentor = await Mentor.findOne({ emailId });
  // console.log("mentor re",recheckMentor)
  if (!recheckMentor) res.status(404).send("Mentor not found");
  let mentorVerified = await recheckMentor.validatePassword(password);
  if(!mentorVerified) res.status(400).send('wrong password')
  req.session.mentorId = recheckMentor._id
  req.session.isMentor = true
  res.json({success:true, recheckMentor})
  } catch (error) {
   next(error) 
  }
}

exports.createTask = async (req, res, next) =>{
  try {
    if(req.session && req.session.isMentor){
      const task = await Todo.create(req.body)
      res.json({success:true, task})
    }
  } catch (error) {
    next(error)
  } 
}

exports.showTask = async (req, res, next) =>{
  try {
    if(req.session && req.session.isMentor){
      const listTasks = await Todo.find()
      res.json({success:true, listTasks})
    }
  } catch (error) {
    next(error)
  }
}