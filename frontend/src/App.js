
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
// import { BrowserRouter as Route, Router,Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    
       <div className="App text-start">
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/add-user" element={<AddUser/>}/>
          <Route exact path="/edit-user/:id" element={<EditUser/>}/>
          <Route exact path="/user/:id" element={<ViewUser/>}/>
        </Routes>
     
      </Router>
    </div>
    
   
  );
}

export default App;
