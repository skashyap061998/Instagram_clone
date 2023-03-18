const {model,Schema} = require("mongoose")

const UserSchema = new Schema({
    name:{type:String,minlength:3},
    password:{type:String,require:true,minlength:6},
    email:{type:String,require:true,unique:true}
},{
    timestamps:true
})

const UserModel = model("user",UserSchema)

module.exports = UserModel