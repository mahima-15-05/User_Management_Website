import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
    });

    const {id} = useParams();

    useEffect(()=>{
        loadUser();

    },[])
    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }
  return (
    <div className=" my-5 container">
      <div className="row ">
        <div className="col-md-6 offset-md-3 border rounded my-6 p-2 shadow py-5">
          <h2 className="text-center">User Details</h2>
          <div class="card ">
            <div class="card-header">
                Details of user id  : {user.id}
                <ul className="list-group list-group-flush my-2">
                    <li className="list-group-item">
                        <b>Name: </b> {user.name}
                    </li>
                    <li className="list-group-item">
                        <b>Username: </b> {user.username}
                    </li>
                    <li className="list-group-item">
                        <b>Email id: </b> {user.email}
                    </li>
                </ul>
            </div>
          </div>
          <Link className="my-2 btn btn-warning btn-outline" to="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
}
