import React from 'react'
import './Idendity.css'
import { useNavigate } from 'react-router-dom'

function Idendity() {
    const navigate=useNavigate();
  return (
    <div>
        <div className="box">
        <div className="containers">
            <div className="btns">
                <button onClick={()=>navigate("/Admin")}>Admin</button>
            </div>
            <div className="btns">
                <button onClick={()=>navigate("/Hr")}>HrManager</button>
            </div>
            <div className="btns">
                <button onClick={()=>navigate("/Supervisor")}>Supervisor</button>
            </div>
            <div className="btns">
                <button onClick={()=>navigate("/Employee")}>Employee</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Idendity