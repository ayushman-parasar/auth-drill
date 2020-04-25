const express = require("express");
const router = express.Router();
const auth = require('./../../../modules/auth')

router.get('/',auth.loggedUser,function(req, res, next){
    let {currentUser} = req
    res.json({success:true, currentUser})
    
})
module.exports = router