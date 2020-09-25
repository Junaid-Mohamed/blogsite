import React,{useState} from 'react';
import { Link } from "react-router-dom";
import FaceIcon from '@material-ui/icons/Face';
import axios from "../axios"
import Footer from "./Footer"
import HomeNavbar from "./HomeNavbar";

export default function Register() {

  const [detail,setDetail] = useState({
    email:"",
    password:""
  })

  function handleChange(event){
    const {name,value} = event.target;
    setDetail(prevDetail=>{
      return {
        ...prevDetail,
        [name] : value
      }
    
  })}

  function handleSubmit(event){
    axios.post("/register",detail)
    .then(resp=>{
      if(resp) alert("succesfully registered user")
      else console.log("Not registered!")
    })
    .catch(err=>console.log(err))
    setDetail({
      email:"",
    password:""
    })
    event.preventDefault()
  }


    return (
      <div>
      <HomeNavbar /><div className="container">
      
 <h2 className="m-5 text-center">Sign Up</h2>
 <form onSubmit={handleSubmit} className="col-md-5 mx-auto">
   <div className="form-group">
     <label >Email address</label>
     <input
      onChange={handleChange}
       value={detail.email}
       type="email"
       name="email"
       className="form-control"
       placeholder="Enter email"
       required
     />
     <small id="emailHelp" className="form-text text-muted">
       We'll never share your email with anyone else.
     </small>
   </div>
   <div className="form-group">
     <label >Password</label>
     <input
     onChange={handleChange}
     value={detail.password}
       type="password"
       name="password"
       className="form-control"
       placeholder="Password"
       required
     />
   </div>
   <button type="submit" className="btn btn-primary">
     Sign up
   </button>
 </form>
 <Link
   to="/login"
   className="text-center m-5"
   style={{ textDecoration: "none", color: "black" }}
 >
   <h5><FaceIcon /> Already a member? Login Here</h5>
 </Link>
 <Footer />
   </div></div>
           
    )
}
