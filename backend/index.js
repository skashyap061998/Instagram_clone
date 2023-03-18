const express = require('express')
const auth = require('./routes/auth')
require('dotenv').config()
const port = process.env.PORT 
const app = express()
const connection = require("./db")
const jwt = require("jsonwebtoken")
const UserModel = require('./models/auth.module')

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use(auth)

app.get("/home",async (req,res)=>{
    const {token} = req.body;
    // console.log(token)
    try {
        const verifyToken = await jwt.verify(token,process.env.SIGN)
        // console.log(verifyToken)
    const get_id = await UserModel.find({_id:verifyToken.id})
    if(get_id){
        return res.send(get_id)
    }
    } catch (error) {
        console.log(error)
    }
})


    app.listen(port, async()=>{
        await connection
        console.log(`Server started at ${port}`)
    })

