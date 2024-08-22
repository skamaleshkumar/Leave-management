import React from 'react'
import Login from './Components/Login.jsx'
import Idendity from './Components/Idendity.jsx'
import './App.css'
import Employee from './pages/Employee.jsx'
import Dashboard from  './pages/Dashboard.jsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './pages/Admin.jsx'
import Hr from './pages/Hr.jsx'
import Update from './Components/Update.jsx'
import Response from './Components/Response.jsx'
import Request from './Components/Request.jsx'
import Supervisor from './pages/Supervisor.jsx'
import Employeedetails from './Components/Employeedetails.jsx'

 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Employee" element={<Employee/>}/>
        <Route path="/Idendity" element={<Idendity/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Hr" element={<Hr/>}/>
        <Route path="/Update" element={<Update/>}/>
        <Route path="/Response" element={<Response/>}/>
        <Route path="/Request" element={<Request/>}/>
        <Route path="/Supervisor" element={<Supervisor/>}/>
        <Route path="/Employeedetails" element={<Employeedetails/>}/>


      
       
      </Routes>
    </BrowserRouter>
  );
}
export default App


