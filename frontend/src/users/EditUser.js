import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const {id} = useParams();

  const [user, setUser]= useState({
    name:"",
    username:"",
    email:""
  });

  const {name, email, username}=user;
  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})

  }
  useEffect(()=>{
    loadUser();
  },[])

  const onSubmit = async (e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/edit-user/${id}`,user);
    navigate("/");
  }

  const loadUser= async ()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  }

  return (
    <div className="my-5 container">
      <div className="row ">
        <div className="col-md-6 offset-md-3 border rounded my-6 p-2 shadow py-5" >
          <h2 className="text-center">Edit User</h2>
          <form onSubmit={(e)=>{onSubmit(e)}}>
          <label htmlFor="name" className="text-start">Name</label><br/>
          <input type="text" name="name" id="name" value={name} placeholder="Enter your name" style={{width: "100%" }} onChange={(e)=>{onInputChange(e)}} /><br/><br/>
          
          <label htmlFor="email" className="text-start">Email</label><br/>
          <input type="email" name="email" id="email" value={email} placeholder="Enter your email" style={{width: "100%" }} onChange={(e)=>{onInputChange(e)}} /><br/><br/>

          <label htmlFor="username" className="text-start">Username</label><br/>
          <input type="{text}" name="username" id="username" value={username} placeholder="Enter your username" style={{width: "100%" }} onChange={(e)=>{onInputChange(e)}}/><br/><br/>


          {/* <label htmlFor="password" className="text-start">Password</label><br/>
          <input type="password" name="password" id="password" placeholder="Enter your password" style={{width: "100%" }}/><br/><br/>

          <label htmlFor="confirm-password" className="text-start">Confirm password</label><br/>
          <input type="password" name="confirm-password" id="confirm-password"  placeholder="Enter your confirm-password" style={{width: "100%" }}/><br/><br/> */}

          <button type="submit" className="btn btn-primary mx-2">Submit</button>
          <Link to="/" className="btn btn-primary">Cancel</Link>
            
          </form>
        </div>
      </div>
    </div>
  );
}
