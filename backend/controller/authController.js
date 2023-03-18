const { Router } = require("express");
const UserModel = require("../models/auth.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signupAuth = async (req, res) => {
  const { name, email, password } = req.body;
  try {
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
    const newUser = await user.save();
    if (newUser) {
      return res.status(201).send({ message: "signup suseccfull" });
    } else {
      return res.status(201).send({ message: "signup fail enter valid credentials" });
    }
  } catch (error) {
    return res.status(400).send({ message: "signup fail" });
  }
};

const loginAuth = async (req, res) => {
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
  console.log(user._id);
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.SIGN
  );
  return res.status(201).send({ message: "signup suseccfull", token: token });
};
module.exports = { signupAuth, loginAuth };
