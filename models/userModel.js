const mongoose=require("mongoose");
const bcrypt = require("bcrypt");

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

});
userSchema.pre("save", function (next) {
    const user = this;
  
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) return next(err);
  
      user.password = hash;
      next();
    });
  });

module.exports=mongoose.model("User",userSchema)