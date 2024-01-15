const mongoose = require("mongoose");

const {Schema,model}= mongoose;
const {ObjectId} = Schema.Types;

const likeSchema = Schema({
    userId:{ 
        type: ObjectId,
        ref: "User",
        required: true
    },
    postId: {
        type: ObjectId,
        ref: "Post",
        required: true
    },
    like: {
        type: Number,
        required: true
    }
})
module.exports = model("Like", likeSchema);