const Post=require("../models/postModel");

const createPost=async(req,res)=>{
    try{
        console.log(req.file);
        const post=new Post({
            title: req?.body?.title,
            caption: req?.body?.caption,
            imageUrl: req?.file?.filename,
        })
        const postData=await post.save();
        res.status(200).send({success:true,msg:"Data submit successfully",data:postData});

    }catch(error){
        res.status(400).send({success:false,msg:"Please Enter correct Value"});
    }
}

const getPost=async(req,res)=>{
    try{
        const posts=await Post.find();
        res.status(200).send({success:true,msg:"posts successfully fetched",data:posts});

    }catch(error){
        res.status(400).send({success:false,msg:error.message});
    }
}

module.exports={
    createPost,
    getPost
};