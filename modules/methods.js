
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
    }
}