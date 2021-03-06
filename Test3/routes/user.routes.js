const user = require("../controllers/user.controller")
const router = require("express").Router()
const { auth, adminAuth } = require("../middleware/auth.middleware")
//add user
router.post("/register", user.register)
router.post("/addAdmin",adminAuth, user.addAdmin)
//login user
router.post("/login", user.login)
//get all users
router.get("/all",auth, user.getAllUsers)
//get single user
router.get("/all/:id", user.getSingleUser)
//update status (activate - deactivate)
router.patch("/activate/:id", user.activateUser)
router.put("/deactivate/:id", user.deactivateUser)
router.patch("/changeStatus", auth, user.changeStatus)
//update user
router.patch("/update", auth, user.updateUser)
//update password
router.patch("/updatePassword", auth, user.changePassword)
//remove account
router.delete("/delete/:id", user.deleteUser)
router.post("/addAddr/:id",user.addAddr)
router.delete("/deletaddresses",user.deletaddresses)
module.exports=router