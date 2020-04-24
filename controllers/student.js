const Student = require("../models/Students");
const auth = require('../modules/auth');
const Todo = require('../models/Todo')

exports.createStudent = async (req, res, next) =>{
    try {
        const student = await Student.create(req.body)
        res.json(student)
    } catch (error) {
        console.log(error,'err')
        next(error) 
    }
}

exports.studentLogin = async (req, res, next) =>{
    try {
    
        let { email, password } = req.body;
        let student = await Student.findOne({ email });
        if (!student) res.status(404).send('Student not found')
        let studentVerified = await student.validatePassword(password)
        if (!studentVerified) res.status(500).send('Wrong Password')
        let token = await auth.generateJWT(student)
        student.token = token   
        res.json({succes:true, token,student: {
          id: student._id,
          email: student.email,
        },})
      
    } catch (error) {
        console.log(error)
        next(error) 
    }
}

exports.getTasks = async (req,res, next)=>{
   try {
    console.log(req.user,'jij')
    const showTasks = await Todo.find({})
    res.json({showTasks})
   } catch (error) {
       next(error)
   }

}