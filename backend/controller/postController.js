const UserModel = require("../models/auth.model");
const createModel = require("../models/create.model");

const postController = async(req,res,next) =>{
    const {author,imgUrl,tittle,like} = req.body ;
    
  try{
     
    if(!author || !imgUrl) return res.status(400).json({message:"fields are missing",status:false})
    let postData = new createModel({
        author,imgUrl,tittle,like
    })
    await postData.save()
    res.status(201).json({message:"post Saved Suessfully",status:true})
  }catch(err){
    res.status(400).json({message:"something went wrong",status:false})
  }
}


module.exports = postController