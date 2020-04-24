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
    let { email, password } = req.body;
    let mentor = await Mentor.findOne({ email });
    if (!mentor) res.status(404).send("Mentor not found");
    let mentorVerified = await mentor.validatePassword(password);
    if (!mentorVerified) res.status(500).send("Wrong Password");
    let token = await auth.generateJWT(mentor);
    mentor.token = token;
    res.json({
      succes: true,
      token,
      mentor: {
        id: mentor._id,
        email: mentor.email,
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
