const mongoose=require("mongoose");

const postSchema=mongoose.Schema({
    title: String,
    caption: String,
    imageUrl:{
        type:String,
        required:true
    },
})
module.exports=mongoose.model("Post",postSchema)