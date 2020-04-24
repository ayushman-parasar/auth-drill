const Mentor = require("../models/Mentor");

exports.createMentor = async (req, res, next) =>{
    try {
        const mentor = await Mentor.create(req.body)
        res.json({success:true}, mentor)
    } catch (error) {
        next(error) 
    }
}
