const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        require:true,
      },
      content: {
        type:String,
        require:true
      },
      author: {
          type:String,
          require:true
        },
      imgUrl:{
        type:String,
        required:true
      }
})

module.exports = mongoose.model("blog",postSchema);