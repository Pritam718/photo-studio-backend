const commentModel = require("../models/commentModel");
const likeModel = require("../models/likeModel");
const handleComment=async(req,res)=>{
    try{
        const { userId, postId, comment } = req.body;
        const newComment = new commentModel({ userId, postId, comment });
        const savedComment = await newComment.save();
        res.status(200).send({success:true,msg:"Comment submit successfully",data:savedComment});
    }catch(error){
        res.status(400).send({success:false,msg:error.message});    
    }
}
const getComment= async (req, res) => {
    try {
      const postId = req.params.postId;
      const comments = await commentModel.find({ postId }).populate('userId');
      res.status(200).send({success:true,msg:"Comment submit successfully",data:comments});
    } catch (error) {
      res.status(400).send({success:false,msg:error.message});
    }
  };
  const like=async(req,res)=>{
    try{
      const {userId,postId,like}=req?.body;
      const existingLike = await likeModel.findOne({ userId, postId });
      //console.log(existingLike.like)
      if (existingLike) {
        return res.status(200).send({success:true, msg: 'User has already given a like for this post',data:existingLike });
      }
  
      const newLike=new likeModel({userId,postId,like});
      const savedLike = await newLike.save();
      res.status(200).send({success:true,msg:"Comment submit successfully",data:savedLike});

    }catch(error){
      res.status(400).send({success:false,msg:error.message}); 
    }
  };

  const getLike= async (req, res) => {
    try {
      const postId = req.params.postId;
      //const likes = await likeModel.find({ postId }).populate('userId');
      const likeCount = await likeModel.countDocuments({ postId });
      console.log(likeCount)
      // res.status(200).send({success:true,msg:"like submit successfully",data:likeCount});
      res.json({ likeCount });
    } catch (error) {
      res.status(400).send({success:false,msg:error.message});
    }
  };

module.exports={
    handleComment,
    getComment,
    like,
    getLike
}