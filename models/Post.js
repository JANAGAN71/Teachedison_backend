const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    
    title:{
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: false,
    },
    categories: {
        type: Array,
        required: false
    },
}, { timestamps: true }
);

const PostModel = mongoose.model("Post", postSchema);
module.exports = PostModel;