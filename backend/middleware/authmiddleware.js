const jwt = require("jsonwebtoken")

const authMiddleware = async (req,res,next)=>{
    const  token= req.headers.authorization;
// console.log(token,"tokn")
  try {
    const verifyToken = await jwt.verify(token, process.env.SIGN);
    if (!verifyToken) {
      return res.status(400).json({ message: "invalid user" });
    }
    console.log(verifyToken)
   req.body.userId =  verifyToken.id
   next()
  } catch (error) {
    res.send(error,"err")
    console.log(error);
  }
}


module.exports = authMiddleware