const express=require("express");
const userController=require("../controllers/userContoller");
const { checkAuth } = require("../middlewares/auth");
const user_router=express();

user_router.post("/",userController.handleUserSignup)
user_router.post("/login",userController.handleUserLogin)
user_router.get("/getuser",checkAuth,userController.getAuthUser);

module.exports=user_router;