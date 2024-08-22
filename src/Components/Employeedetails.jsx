import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Employeedetails.css'
function Employeedetails() {
    const navigate=useNavigate();
  return (
    <div>
        <div className="detail">
        <h1>Employee Details</h1>
        <button className='add' onClick={()=>navigate("/Update")}>+ Add New</button>
        </div>
        
    </div>
  )
}

export default Employeedetails