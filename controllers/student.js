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

// exports.studentLogin = async (req, res, next) =>{
//     try {
//         const student = await Student.create(req.body)
//         res.json({success:true}, student)
//     } catch (error) {
//         console.log(error)
//         next(error) 
//     }
// }
