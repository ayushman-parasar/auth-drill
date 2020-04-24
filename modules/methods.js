
const Mentor  = require("../models/Mentor")

module.exports ={
    checkMentor :  async (req, res, next)=> {
        try {
            let id = req.user.userID
            const mentor = await Mentor.findById(id)
            if(mentor){
                req.user.mentorChecked = true
            }else{
                req.user.mentorChecked = false
            }
            next()
        } catch (error) {
           next(error) 
        }
    },

    mentorLogin: async (req, res, next) => {
        try {
            const mentor1={
                name:"nesa",
                email:"m1@gmail.com",
                password:"hello"
            }
            const mentor2={
                name:"asdsad",
                email:"m2@gmail.com",
                password:"hello"
            }
            const mentor3={
                name:"asdsadsd",
                email:"m3@gmail.com",
                password:"hello"
            }
            const mentor4={
                name:"sdasdsadas",
                email:"m4@gmail.com",
                password:"hello"
            }
            const mentors = [mentor1, mentor2, mentor3, mentor4]
        } catch (error) {
            
        }
    }
}

