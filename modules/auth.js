const Student = require("./../models/Students");
const Mentor = require("./../models/Mentors");

exports.loggedUser = async (req, res, next) => {
  try {
    if (req.session && req.session.studentId) {
      let id = req.session.studentId
      const student = await Student.findById(id);
      req.currentUser = {"student":student};
      next();
    } else {
      let id = req.session.mentorId
      const mentor = await Mentor.findById(id);
      req.currentUser = {"mentor":mentor};
      next();
    }
  } catch (error) {
    next(error);
  }
};
// check student
exports.checkIfStudent = async (req, res, next) => {
  try {
    console.log("auth", req.session);
    if (req.session && req.session.isStudent) {
      let id = req.session.studentId;
      const student = await Student.findById(id);
      req.student = student;
      next();
    }
  } catch (error) {
    next(error);
  }
};
