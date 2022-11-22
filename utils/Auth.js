require("dotenv").config;
const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  console.log("Running Authentication");
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(403).json("Invalid Token");
      }
      req.user = user;
      console.log("Auth Passed")
      next();
    });
  } else {
    res.status(401).json("Not Auth");
  }
};

module.exports = verify;
