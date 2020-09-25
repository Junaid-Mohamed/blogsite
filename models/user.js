const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : {
        type:String,
        require:true,
        trim:true
      },
      password : {
        type:String,
        require:true
      }
});


module.exports =  mongoose.model("user",userSchema);