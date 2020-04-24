const Student = require("../models/Students");


exports.createStudent = async (req, res, next) =>{
    try {
        const student = await Student.create(req.body)
        res.json(student)
    } catch (error) {
        console.log(error,'err')
        next(error) 
    }
}

exports.studentLogin = async(req, res, next)=>{
    try {
        console.log(req.body)
        let {emailId,password} = req.body;
        const student = await Student.findOne({emailId})
        console.log(student)
        if (!student) res.status(404).send('Student not found')
        let studentVerified = await student.validatePassword(password)
        console.log(studentVerified)
        if (!studentVerified) res.status(500).send('Wrong Password')
        req.session.studentId = student.id;
        console.log(req.session)
        res.json({success})
    } catch (error) {
        
    }
}
