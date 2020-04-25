const Student = require('./../models/Students')


// exports.loggedUser = async (req, res, next)=>{
//     try {
//         if(req.session && req.session.userId){
//             console.log('userId',userId)
//             next();
//         }
//         console.log("no req.session")
//         next()  

//     } catch (error) {
//         next(error)
//     }
// }
// check student
exports.checkIfStudent = async (req, res, next)=>{
    try {
        console.log("auth",req.session)
        if(req.session && req.session.isStudent){
            let id = req.session.studentId
            const student = await Student.findById(id)
            req.student = student
           next()
        }
    } catch (error) {
        next(error)
    }
}
