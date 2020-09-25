import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "../axios";

function AddPost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: "",
    imgUrl: "",
  });
  const [msg, setMsg] = useState("");
  const [posted, setPosted] = useState("false");

  function handleChange(event) {
    const { name, value } = event.target;
    setPost((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPosted("true")
    axios
      .post("/add-post", post)
      .then((resp) => setMsg(resp.data))
      .catch((err) => console.log(err));
    setPost({
      title: "",
      content: "",
      author: "",
      imgUrl: "",
    });
  }

 

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="col-md-7 mx-auto">
        <div className="form-group">
          {posted === "true" ? (
            <h3 className="p3 text-center mt-2">{msg}</h3>
          ) : (
            <h2 className="p-3 text-center">Add New Post</h2>
          )}
          <label>Add Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={post.title}
            className="form-control"
            placeholder="Title"
            required
          />
        </div>
        <div className="form-group">
          <label>Add Image</label>
          <input
            onChange={handleChange}
            value={post.imgUrl}
            type="text"
            name="imgUrl"
            className="form-control"
            placeholder="imgUrl"
            required
          />
        </div>
        <div className="form-group">
          <label>Add Description</label>
          <textarea
            onChange={handleChange}
            value={post.content}
            type="text"
            name="content"
            className="form-control"
            placeholder="Description"
            rows="5"
            required
          />
        </div>

        <div className="form-group">
          <label>Add Author</label>
          <input
            onChange={handleChange}
            value={post.author}
            type="text"
            name="author"
            className="form-control"
            placeholder="Author"
            required
          />
        </div>
        {posted === "true" ? (
          <Link to="/add-post" onClick={()=>{setPosted("false")}} className="btn btn-outline-secondary btn-sm ">
            Add another post
          </Link>
        ) : (
          <button  type="submit" className="btn btn-outline-success btn-sm">
            Post
          </button>
          
        )}
        <Link to="/posts" className="btn btn-outline-secondary btn-sm ml-4">
          Back to Posts
        </Link>
      </form>
      <Footer />
    </div>
  );
}

export default AddPost;
