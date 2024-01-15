const express=require("express");
const { restrictToLoggedinUserOnly } = require("../middlewares/auth");
const likeCommentController=require("../controllers/likeCommentContoller")
const like_comment_route=express();

like_comment_route.post('/comment',likeCommentController.handleComment)
like_comment_route.get('/getComment/:postId',likeCommentController.getComment)
like_comment_route.post('/like',likeCommentController.like);
like_comment_route.get('/getLike/:postId',likeCommentController.getLike)
module.exports=like_comment_route