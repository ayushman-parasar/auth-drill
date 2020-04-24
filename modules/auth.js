const jwt = require("jsonwebtoken");

module.exports = {
  generateJWT: async function (user) {
    var payload = {
      userID: user.id,
      email: user.email,
      username: user.username,
    };
    var token = jwt.sign(payload, process.env.secret);
    return token;
  },
  verifyToken: async (req, res, next) => {
    var token = req.headers["authorization"] || "";
    // console.log("hey token",token)

    if (token) {
      try {
        var verification = await jwt.verify(token, process.env.secret);

        req.user = verification;
        // console.log('auth',req.user)  
        next();
      } catch (error) {
        console.log("veriification ", error);
      }
    } else {
      res.send("token required");
    }
  },
};
