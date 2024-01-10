const express=require("express");
const post_route=express();
const postController=require("../controllers/postController");
const upload = require("../util/imageUploader");

post_route.post("/",upload.single('image'),postController.createPost);
post_route.get("/",postController.getPost)

module.exports=post_route;