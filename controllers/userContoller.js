const User =require("../models/userModel");
const {v4: uuidv4}=require("uuid");
const {setUser}=require("../service/auth")

const handleUserSignup=async(req,res)=>{  
try{
    console.log(req?.body)
    const user=new User({
        firstName: req?.body?.firstName,
        lastName: req?.body?.lastName,
        email: req?.body?.email,
        //profilePicUrl:req?.body?.profilePicUrl,
        password: req?.body?.password
    })
    const userData=await user.save();
    res.status(200).send({success:true,msg:"User Data submit successfully",data:userData});
}catch(error){
    res.status(400).send({success:false,msg:error.message});
}
}
const handleUserLogin=async(req,res)=>{  
    try{
        const{email,password}=req?.body
        const user=await User.findOne({email,password});
        if(!user){
            //console.log("Invalid User");
            res.status(200).send({success:true,msg:"Invalid User"})
        }else{
            // console.log("valid User");
            
            const token=setUser(user);
            res.cookie("uid",token)
            res.status(200).send({success:true,msg:"valid User"})
        }
    }catch(error){
        res.status(400).send({success:false,msg:error.message});
    }
    }
    
module.exports={
    handleUserSignup,
    handleUserLogin
}