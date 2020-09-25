import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register"
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";



function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Home}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/posts" component={Posts}></Route>
    <Route path="/add-post" component={AddPost}></Route>
   </BrowserRouter>
    
  );
}

export default App;
