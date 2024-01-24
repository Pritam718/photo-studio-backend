const express=require("express");
const post_route=require("./postRoute");
const user_route=require("./userRoute");
const like_comment_route = require("./likeCommentRoute");
const search_route = require("./search");
const router=express();

router.use("/flashes",post_route);
router.use("/user",user_route);
router.use("/photo",like_comment_route);
router.use("/searchItem",search_route);
module.exports=router;