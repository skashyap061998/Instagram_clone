const {model,Schema} = require("mongoose")

const createSchema = new Schema({
    userId:{type:String,require:true},
    imgUrl:{type:String,require:true},
})

const createModel = model("userpost",createSchema)

module.exports = createModel