import React, { useState } from 'react'
import axios from 'axios';


export default function AddUser() {

  const [formData, setFormData]=useState({
    name:"",
    age: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev=>({
      ...prev,
      [name]:value
    }));
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/add-user", formData);
      if(response.status === 200){
        alert("User successfully added");
        setFormData({
          name: "",
          age: ''
        });

      }else{
        alert("Error adding user",response.data.message)
      }
    } catch (error) {
      console.log("Error "+error);
      alert('Error: '+error.response?.data?.message || error.message);
    }
  }

  return (

    <>
   <h2 className='form-heading'>Add user form</h2>
    <div className='form-container'>
      <form className='form-item-container' onSubmit={handleSubmit}>
 
        <label>Name</label>
        <input name="name"
              value={formData.name}
              onChange={handleChange} type="text"  placeholder='Enter your name'/>
        <label>Age</label>
        <input type="number" name='age' onChange={handleChange} value={formData.age}/>
      
        <div>
        <button type='submit' className='submit-add-user'>Submit</button>
        </div>
      </form>
       
        
      
    </div>
    </>
  )
}
