const {model,Schema} = require("mongoose")

const createSchema = new Schema({
    author:{type:String,require:true},
    imgUrl:{type:String,require:true},
    tittle:{type:String},
    like:{type:Number, default:0}
},{
    timestamps:true
})

const createModel = model("userpost",createSchema)

module.exports = createModel