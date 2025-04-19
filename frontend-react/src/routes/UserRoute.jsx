import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import AddUser from '../components/AddUser'
import Navbar from '../components/Navbar'
import UserTable from '../components/UserTable'
import UpdateUser from '../components/UpdateUser'


export default function UserRoute() {
  return (
    <div>
        <Routes>
            <Route path="/add-user" element={<AddUser/>}/>
            <Route  path="/" element={
                <>
                <Navbar/>
                <UserTable/>
                </>
            }/>
            <Route path="/update-user/:id" element={<UpdateUser/>}/>
        </Routes>
    </div>
  )
}
