const Mentor = require("../models/Mentor");
const auth = require("../modules/auth");
const Todo = require("../models/Todo");

exports.createMentor = async (req, res, next) => {
  try {
    const mentor = await Mentor.create(req.body);
    res.json(mentor);
  } catch (error) {
    next(error);
  }
};

exports.mentorLogin = async (req, res, next) => {
  try {
    let { emailId, password } = req.body;
    // console.log(req.body)
    let mentor = await Mentor.findOne({ emailId });
    console.log("mentor1",mentor)
    // const mentor1 = {
    //   name: "nesa",
    //   emailId: "m1@gmail.com",
    //   password: "hello",
    // };
    // const mentor2 = {
    //   name: "asdsad",
    //   emailId: "m2@gmail.com",
    //   password: "hello",
    // };
    // const mentor3 = {
    //   name: "asdsadsd",
    //   emailId: "m3@gmail.com",
    //   password: "hello",
    // };
    // const mentor4 = {
    //   name: "sdasdsadas",
    //   emailId: "m4@gmail.com",
    //   password: "hello",
    // };
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
    console.log("first")
    if(!mentor){
      for( men of mentors){
        var newMentor = await new Mentor(men)
        await newMentor.save()
       }
    }
    console.log("second",)
    let mentorAgain = await Mentor.findOne({ emailId });
    console.log(mentorAgain,"mentor")
    if (!mentorAgain) res.status(404).send("Mentor not found");
    let mentorVerified = await mentorAgain.validatePassword(password);
    if (!mentorVerified) res.status(500).send("Wrong Password");
    let token = await auth.generateJWT(mentorAgain);
    mentorAgain.token = token;
    res.json({
      succes: true,
      token,
      mentor: {
        id: mentorAgain._id,
        email: mentorAgain.emailId,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    if (req.user.mentorChecked) {
      const task = await Todo.create(req.body);
      res.json(task);
    }
    res.send("Mentor can only create tasks");
  } catch (error) {
    next(error);
  }
};

exports.getAlltasks = async (req, res, next) => {
  try {
    // console.log(req.user, "jij");
    const showTasks = await Todo.find({});
    res.json({ showTasks });
  } catch (error) {
    next(error);
  }
};
