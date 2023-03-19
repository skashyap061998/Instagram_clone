const express = require('express')
const auth = require('./routes/auth')
require('dotenv').config()
const port = process.env.PORT 
const app = express()
const connection = require("./db")
const jwt = require("jsonwebtoken")
const UserModel = require('./models/auth.model')
const postRoute = require('./routes/postROute')
const commentRoute = require('./routes/comment')
const cors = require('cors')

 
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{

    res.send("hello")
})

app.use("/user",auth)
app.use("/post",postRoute)
app.use("/comment",commentRoute)


    app.listen(port, async()=>{
        await connection
        console.log(`Server started at ${port}`)
    })

