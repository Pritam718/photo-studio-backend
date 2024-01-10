const express=require("express");
const userController=require("../controllers/userContoller")
const user_router=express();

user_router.post("/",userController.handleUserSignup)
user_router.post("/login",userController.handleUserLogin)

module.exports=user_router;