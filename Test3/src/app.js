require('../database/connect')
const express= require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const userRoutes=require("../routes/user.routes")
const postRoutes=require("../routes/post.routes")

app.use("/user",userRoutes)
app.use("/post",postRoutes)

module.exports = app