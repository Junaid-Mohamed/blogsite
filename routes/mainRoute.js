const express = require("express");
const mongoose = require("mongoose")
const lodash = require("lodash")

const {mongourl} = require("../config/keys")
const User = require("../models/user");
const Blog = require("../models/post");


const app = express()



mongoose.connect(mongourl,{useNewUrlParser: true,useUnifiedTopology:true}); 

module.exports =(app)=>{

    //Register Route
    app.post("/register",(req,res)=>{
        let user = new User(req.body)
        user.save()
        .then((err,docs)=>{
            if(err) res.json(err)
            else res.json("Successfully registered User")
        })
    })

    //login route
    app.post("/login",(req,res)=>{
        
        User.findOne({email:req.body.email})
        .then(foundUser=>{
          // console.log("user exists");
            if(foundUser.password === req.body.password) res.json("1");
            else res.json("0");
        })
        .catch(err=>{
          // console.log("user does not exists");
          res.send("user does not exists");
        })    
        })

    // retriving posts from DB

    app.get("/posts",(req,res)=>{
      Blog.find((err,foundPosts)=>{
      if(err) res.send(err);
      else res.send(foundPosts);
    })
})

// adding route for add-post

    app.post("/add-post",(req,res)=>{
      let blog = new Blog(req.body)
      blog.save((err,data)=>{
        if(err) res.send("Post not added.")
        else res.send("Congrats post has been added successfully!")
      })
    })

  // route for specific post.
  app.get('/posts/:title',(req, res)=>{
    const title = req.params.title;
    Blog.findOne({title:title},(err,foundItem)=>{
      if(!err){
        if(lodash.lowerCase(foundItem.title)===lodash.lowerCase(title)){
          res.send(foundItem)
        }else{
          console.log("not found")
        }
      }
    })
  })

}