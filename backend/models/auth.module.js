const {model,Schema} = require("mongoose")

const UserSchema = new Schema({
    name:{type:String},
    password:{type:String,require:true},
    email:{type:String,require:true}
})

const UserModel = model("user",UserSchema)

module.exports = UserModel