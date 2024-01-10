const express=require("express");
const post_route=require("./postRoute");
const user_route=require("./userRoute");
const router=express();

router.use("/flashes",post_route);
router.use("/user",user_route)
module.exports=router;