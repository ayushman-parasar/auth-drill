const express = require("express");
const router = express.Router();
const methods = require('../../../modules/methods')
const auth = require('../../../modules/auth')
const Student = require("../../../models/Students")
const Mentor = require("../../../models/Mentor")

router.get('/',auth.verifyToken,methods.checkMentor,async function(req, res, next){
    let id  = req.user.userID
    console.log(req.user)
    if(req.user.mentorChecked == false){
        console.log("inside")
        const student = await Student.findById(id)
        console.log(student)
        res.json({student})
    }else{
        const mentor = await  Mentor.findById(id)
        res.json({mentor})
    } 
    
})

module.exports = router