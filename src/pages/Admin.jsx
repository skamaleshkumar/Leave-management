import React from 'react'
import './Admin.css'
import { Link } from 'react-router-dom'
import Response from '../Components/Response'
function Admin() {
  return (
    <div>
      <div className="admincontainer">
       <div className="links">
      <Link to="./Login" id='links'>Myprofile</Link>
      <Link to="./" id='links'>Dashboard</Link>
      <Link to="./Response" id='links'>Leave</Link>
      <Link to="./" id='links'>Calender</Link>
      <Link to="./Update" id='links'>Singnout</Link>
      
    </div>
    </div>
      <div className="profile">
        <div className="profile1">
            <p>
            Name:kamalesh kumar

            Id:

            Email:

            Phone:

            Linkdin:

            Adress:

            Place:

            Department:

            Position:

            Salary:

            Date of birth:

            Father name:

            Mother name:

            Siblings:

            Mother language:

            Skills:

            Known Language:
            </p>
        </div>
        <div className="profile2">
        Marrital Status:

         Projects:

         Joining date:

         Experience:

         Position Type:


        </div>
      </div>
      <Response/>
     
    </div>
  )
}

export default Admin