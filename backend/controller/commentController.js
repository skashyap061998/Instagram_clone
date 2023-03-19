const commentModel = require("../models/comment.model");
const createModel = require("../models/create.model");

const commentController = async(req,res) =>{
    const {author,content,post_id,parent_comment_id} = req.body ;
    
  try{
     
    if(!author) return res.status(400).json({message:"fields are missing",status:false})
    let postData = new commentModel({
        author,content,post_id
    })
    await postData.save()
    res.status(201).json({message:"post Saved Suessfully",status:true})
  }catch(err){
    res.status(400).json({message:"something went wrong",status:false})
  }
}


module.exports = commentController