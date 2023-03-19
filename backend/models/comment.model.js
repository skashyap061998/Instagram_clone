const {model,Schema} = require("mongoose")

const commentSchema = new Schema ({
  post_id: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  parent_comment_id: { type: Schema.Types.ObjectId, ref: 'Comment', default: null },
  content: { type: String, required: true },
  author: { type: String, required: true }
},{
    timestamps:true
})

console.log(Schema,"schrema",commentSchema)
const commentModel = model("comment",commentSchema)

module.exports = commentModel