const { Router } = require("express");
const UserModel = require("../models/auth.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signupAuth = async (req, res) => {
  const { name,username, email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).send({ message: "Email is already in use" ,status:false});
    }
    // console.log(name,email,password)
    user = await new UserModel({
      name,
      username,
      email,
      password,
    });
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    const newUser = await user.save();
    if (newUser) {
      return res.status(201).send({ message: "signup suseccfull",status:true });
    } else {
      return res
        .status(400)
        .send({ message: "signup fail enter valid credentials",status:false});
    }
  } catch (error) {
    return res.status(400).send({ message: "signup fail",status:false ,error:error});
  }
};

const loginAuth = async (req, res) => {
  const { x, password } = req.body;
  // console.log(x,password)

  const user = await UserModel.findOne({
    $or: [{ username: x }, { email: x }],
  });
  console.log(user)
  if (!user) {
    return res.status(400).send({message:"enter valid credentials",status:false});
  }

  const Passcheck = await bcrypt.compare(password, user.password);

  if (!Passcheck) {
    return res.status(400).send({message:"enter valid credentials",status:false});
  }
  // console.log(user._id);
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.SIGN
  );
  return res.status(201).send({ message: "Login suseccfull", token: token ,status:true,user:user});
};
module.exports = { signupAuth, loginAuth };
