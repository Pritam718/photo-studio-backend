const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    // profilePicUrl:{
    //     type:String
    // },
    password:{
        type:String,
        required:true
    }
    // firstName:String,
    // lastName:String,
    // email: String,
    // password: String

})

module.exports=mongoose.model("User",userSchema)