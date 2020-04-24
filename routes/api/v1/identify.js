const express = require("express");
const router = express.Router();
const auth = require('../../../modules/auth')
const Student = require("../../../models/Mentor")
const Mentor = require("../../../models/Mentor")

router.get('/',auth.verifyToken,async function(req, res, next){
    let id  = req.user.userID
    const mentor = await  Mentor.findById(id)
    const student = await Student.findById(id)
    // await Promise.all([mentor, student])
    // .then(res=> console.log(res))
    // console.log(mentor)
    // console.log(student)
    mentor.save()
    student.save()
    res.json({mentor,student})
    
})

module.exports = router