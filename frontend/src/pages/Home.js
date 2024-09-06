import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const {id}=useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("Code with me");
    loadUsers();
  }, []);

 

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8080/delete-user/${id}`);
    loadUsers();
  }

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/list-user");
    setUsers(result.data);
  };
  return (
    <div className="my-5 container ">
      {/* table */}
      <div className="py-4 ">
        <table className="border shadow table">
          {/* box shadow generator */}
          <thead className="border-dark">
            <tr>
              <th scope="col">Sr. no.</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr scope="row" key={index}>
                <th  >
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="">
                <Link to={`/user/${user.id}`} className="btn mx-2 btn-warning btn-outline-dark">View</Link>
                <Link to={`/edit-user/${user.id}`} className="btn btn-warning btn-outline-dark ">Edit</Link>
                <button onClick={()=>{deleteUser(user.id)}} className="btn mx-2 btn-warning btn-outline-dark ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
         
        </table>
      </div>
    </div>
  );
}
