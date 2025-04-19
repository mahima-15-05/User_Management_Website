import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserTable() {
  const [data, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user-list")
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);
  //   const handleDelete = async (id)=>{
  //     if(window.confirm("Are you sure? You want to delete this user?")){
  //        try {
  //         const response = await axios.delete(`http://localhost:8080/api/delete-user/${id}`);
  //         alert("User deleted successfully");
  //         // navigate(0);
  //         window.location.reload();

  //     } catch (error) {
  //         console.error("Delete failed:", error);
  //         alert("Error deleting user");
  //     }
  //     }

  // }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure? You want to delete this user?")) {
      try {
        const response = await axios.delete(
          `http://localhost:8080/api/delete-user/${id}`
        );
        alert("User deleted successfully");
        window.location.reload(); // This will refresh the whole page
      } catch (error) {
        console.error("Delete failed:", error);
        alert("Error deleting user");
      }
    }
  };

  return (
    <>
      <div className="user-table-container">
        <h2 className="table-heading">User Table</h2>
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Username</th>
              <th>Action</th>
              {/* <th>State</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.username}</td>

                <td>
                  <button className="action">
                    <Link
                      className="btn-link update-btn"
                      to={`update-user/${item.id}`}
                    >
                      Update
                    </Link>
                  </button>
                  {/* <button onClick={handleDelete(data.id)} className='action'><a className='btn-link' href="#">Delete</a></button> */}

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="action"
                  >
                    <a className="btn-link" href="#">
                      Delete
                    </a>
                  </button>
                </td>
{/* 
                <td>
                  <button className="action">
                    <a className="btn-link" href="#">
                      Active
                    </a>
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>

        {/* <button className='action'><a className='btn-link' href="/add-user">Add</a></button> */}

        <div className="add-user-btn">
          <Link to="/add-user">
            <button className="btn-add">Add User</button>
          </Link>
        </div>
      </div>
    </>
  );
}
