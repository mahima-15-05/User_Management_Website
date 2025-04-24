import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import AddUser from '../components/AddUser'
import Navbar from '../components/Navbar'
import UserTable from '../components/UserTable'
import UpdateUser from '../components/UpdateUser'
import Login from '../auth/login'
import Register from '../auth/register'


export default function UserRoute() {
  return (
    <div>
        <Routes>
            <Route path="/add-user" element={<AddUser/>}/>
            <Route  path="/dashboard" element={
                <>
                <Navbar/>
                <UserTable/>
                </>
            }/>
            <Route path="/dashboard/update-user/:id" element={<UpdateUser/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  )
}
