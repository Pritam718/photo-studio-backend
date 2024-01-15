const User =require("../models/userModel");
const {v4: uuidv4}=require("uuid");
const {setUser}=require("../service/auth")
const bcrypt = require("bcrypt");
const { response } = require("express");

const handleUserSignup=async(req,res)=>{  
try{
    const { firstName,lastName,email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!!user)
      return res.status(400).send({success:false,msg: "user alrady exist with this email"});

    const userData = await User.create({ firstName:firstName,lastName:lastName,email: email, password: password });
    res.status(200).send({success:true,msg:"User Data submit successfully",data:userData});
}catch(error){
    res.status(400).send({success:false,msg:error.message});
}
}
const handleUserLogin=async(req,res)=>{  
    try{
        const{email,password}=req?.body
        const user=await User.findOne({email});
        if(!user){
            res.status(400).send({success:false,msg:"Invalid User Email"})
        }else{
             bcrypt.compare(password,user.password,(err,response)=>{
                if(response){
                    const token=setUser(user);
                    console.log(user);
                    res.cookie("uid",token)
                    res.status(200).send({success:true,msg:"Login Done... Now enjoy ",user})
                }else{
                    res.status(400).send({success:false,msg:"Invalid User Password"})
                }
             })
        }
    }catch(error){
        res.status(400).send({success:false,msg:error.message});
    }
    }
    const getAuthUser = async (req, res) => {
        try {
          const id = req?.user?._id;
          const user = await User.findById(id);
          res.status(200).send({success:true,msg:"user found",user})
        } catch (error) {
            res.status(400).send({success:false,msg:error.message});
        }
      };


module.exports={
    handleUserSignup,
    handleUserLogin,
    getAuthUser
}