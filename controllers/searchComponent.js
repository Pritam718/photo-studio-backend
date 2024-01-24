const Post=require("../models/postModel");

const getSearch=async(req,res)=>{
    try{
        let result=await Post.find({
            "$or":[
                {caption:{$regex:req.params.key}}
            ]
        });
        res.status(200).send({ success: true, msg: "search successfully fetched", data: result });
    }catch(error){
        res.status(400).send({success:false,msg:error.message});
    }
}

module.exports={
    getSearch
}