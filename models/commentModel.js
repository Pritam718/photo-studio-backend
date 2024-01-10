const mongoose = require("mongoose");

const {Schema,model}= mongoose;
const {ObjectId} = Schema.Types;

const commentSchema = Schema({
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
    comment: {
        type: String,
        required: true
    }
})

module.exports = model("Comment", commentSchema);