const jwt = require("jsonwebtoken")

const authMiddleware = async (req,res,next)=>{
    const  token= req.headers.authorization;
  try {
    const verifyToken = await jwt.verify(token, process.env.SIGN);
    if (!verifyToken) {
      return res.status(400).json({ message: "invalid user" });
    }
   req.body.author =  verifyToken.id
  //  console.log(req.body.author)
   next()
  } catch (error) {
    res.send(error,"err")
    console.log(error);
  }
}


module.exports = authMiddleware