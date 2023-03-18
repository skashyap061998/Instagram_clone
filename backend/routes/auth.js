const { Router } = require("express");
const auth = Router();
const { signupAuth, loginAuth } = require("../controller/authController");

auth.post("/signup", signupAuth);

auth.post("/login", loginAuth);



module.exports = auth;
