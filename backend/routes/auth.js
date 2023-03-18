const { Router } = require("express");
const UserModel = require("../models/auth.module");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const auth = Router();
const jwt = require("jsonwebtoken");

auth.post(
  "/signup",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 6 character").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array()[0].msg);
    }

    const { name, email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).send({ message: "Email is already in use" });
    }
    // console.log(name,email,password)
    user = await new UserModel({
      name,
      email,
      password,
    });
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);

    user.save();
    return res.status(201).send({ message: "signup suseccfull" });
  }
);

auth.post(
  "/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "Password can not be empty").exists(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error.array()[0].msg);
    }
    const { email, password } = req.body;

    const user = await UserModel.findOne({
      email,
    });
    if (!user) {
      return res.status(400).send("enter valid credentials");
    }

    const Passcheck = await bcrypt.compare(password, user.password);

    if (!Passcheck) {
      return res.status(400).send("enter valid credentials");
    }
console.log(user._id)
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.SIGN
    );
    return res.status(201).send({ message: "signup suseccfull", token: token });
  }
);

module.exports = auth;
