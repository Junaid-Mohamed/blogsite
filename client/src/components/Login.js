import React,{useState} from "react";
import { Link,useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import axios from "../axios"
import Footer from "./Footer"
import HomeNavbar from "./HomeNavbar";

function Login() {

  const [detail,setDetail] = useState({
    email:"",
    password:""
  })
  const history = useHistory();
  const [msg,setMsg] = useState("");


  function handleChange(event) {
    const { name, value } = event.target;
    setDetail((prevDetail) => {
      return {
        ...prevDetail,
        [name]: value,
      };
    });
  }

  function handleSubmit(event){
    
    axios.post("/login",detail)
    .then(resp=>{
      if(resp.data === "1")
      {
        setMsg("succesfully Logged In")
        history.push("/posts")
    } 
      else if(resp.data === "0") setMsg("Invalid password!")
      else setMsg("User doesn't exist please Sign Up!")
    })
    .catch(err=>console.log(err))
    setDetail({
      email:"",
    password:""
    })
    
    event.preventDefault();
  }

  return (
    <div>
    <HomeNavbar />
    <div className="container">
    
      <h2 className="m-5 text-center">Sign in</h2>
      <form onSubmit={handleSubmit} className="col-md-5 mx-auto">
        <div className="form-group">
        <h4 className="p3 text-center">{msg}</h4>
          <label>Email address</label>
          <input onChange={handleChange}
            value={detail.email} type="email" placeholder="Enter email" name="email" className="form-control" />
         
        </div>
        <div className="form-group">
          <label>Password</label>
          <input onChange={handleChange}
          value={detail.password} type="password" placeholder="Password" name="password" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
      <Link
        to="/register"
        className="text-center m-5"
        style={{ textDecoration: "none", color: "black" }}
      >
        <h5>
          <PersonIcon /> Not a member? Sign Up Here
        </h5>
      </Link>
      <Footer />
    </div></div>
    
  );
}

export default Login;
