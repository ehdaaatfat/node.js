const post = require("../controllers/post.controller")
const router = require("express").Router()

router.post("/addPost", post.addPost)

router.get("/", post.getAllPost)

router.post("/updatePost/:id", post.updatePost)

router.get("/getSinglePost/:id", post.getSinglePost)


router.delete("/deletePost/:id", post.deletePost)

module.exports=router