const Post = require("../models/postModel");
const  cloudinary= require("../util/cloudinary");

const createPost = async (req, res) => {
    const file=req.files.image;
    cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
        //console.log(result);
        const post = new Post({
            title: req?.body?.title,
            caption: req?.body?.caption,
            imageUrl: result.secure_url,
          });
          post.save()
            .then(result=>{
                console.log(result);
                res.status(200).send({ success: true, msg: "Data submit successfully", data: result})
            })
            .catch(error=>{
                console.log(error);
                res.status(400).send({ success: false, msg: "Please Enter correct Value" });
            })
    })
  
};

const getPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res
      .status(200)
      .send({ success: true, msg: "posts successfully fetched", data: posts });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

module.exports = {
  createPost,
  getPost,
};
