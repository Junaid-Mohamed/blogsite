import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "../axios";
// import Footer from "./Footer"

function Posts(props) {
  console.log(props);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // async function fetchPost() {
    //   const req = await axios.get("/posts");
    //   console.log("/posts is called")
    //   setPost(req.data);
    //   setDisplayPost("true")
    // }
    // fetchPost();
    // or
    axios
      .get("/posts")
      .then((resp) => setPosts(resp.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Navbar />
      <h3 className=" text-center p-2">Hey! checkout these posts</h3>
      {posts.map((Post, key) => {
        return (
          <div className="container" key={key}>
            <h2>{Post.title}</h2>
            <img
              style={{ display: "block" }}
              src={Post.imgUrl}
              alt="not available"
              width="40%"
              height="200px"
            ></img>
            <span className="badge badge-dark p-2 mt-2">@{Post.author}</span>
            <h6 className=" mt-3">{Post.content}</h6>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
