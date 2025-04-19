
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function UpdateUser() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({name:"", age:''});
    //first fetch user with the perticular id 
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/user-by-id/${id}`).then(
            res=>{
                // setFormData(res.data);
                setFormData({
                    id: res.data.id || "",
                    name: res.data.name || "",
                    age: res.data.age || "",
                    username:res.data.username ||""
                });
                console.log(res.data);
            }
        )
        .catch(err => {
            console.error(err);
            alert("Failed to fetch user");
        })

    },[id]);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(prev =>({
            ...prev ,
            [name]:value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.put(`http://localhost:8080/api/update-user/${formData.id}`, formData);
          console.log(response);
          if (response.status === 200) {
            alert("User updated successfully");
            navigate("/"); // Go back to user table
          }
        } catch (err) {
            console.error('Update failed:', err);
            alert(err.response?.data?.message || "Something went wrong");
        }
      };

    



  return (
    <>
    <h2 className='form-heading'>Update user form</h2>
     <div className='form-container'>
       <form className='form-item-container' onSubmit={handleSubmit}>
  
         <label>Name</label>
         <input name="name"
               value={formData.name}
               onChange={handleChange} type="text" required />
         <label>Age</label>
         <input type="number" name='age' onChange={handleChange} value={formData.age} required />
         <label>Username</label>
         <input type="email" name='username' onChange={handleChange} value={formData.username} required />
       
         <div>
         <button type='submit' className='submit-add-user'>Submit</button>
         </div>
       </form>
        
         
       
     </div>
     </>
  )
}
