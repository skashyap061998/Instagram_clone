const UserModel = require("../models/auth.model");
const createModel = require("../models/create.model");

const postController = async(req,res,next) =>{
    const {userId,imgUrl} = req.body ;
    console.log(userId,imgUrl)
   
    if(!userId || !imgUrl) return res.status(400).json({message:"fields are missing"})
    let postData = new createModel({
        userId,imgUrl
    })
    await postData.save()
    res.send('sucess')
}


module.exports = postController