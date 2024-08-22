import React from 'react'
import { Link } from 'react-router-dom'
import './Employee.css'
function Employee() {
  return (
    <div>
     <div className="employeecontainer">
       <div className="emplinks">
      <Link to="./" id='emplinks'>Myprofile</Link>
      <Link to="../Request" id='emplinks'>Leave</Link>
      <Link to="" id='emplinks'>Calender</Link>
      <Link to="/" id='emplinks'>Singnout</Link>
      
    </div>
    </div>
      <div className="profile">
        <div className="profile1">
           
           <h3> Name : kamalesh kumar</h3>

           <h3>Id :</h3>

           <h3>Email:</h3>

           <h3> Phone:</h3>

           <h3>Linkdin:</h3>

           <h3>Adress:</h3>

           <h3>Place:</h3>

           <h3>Department:</h3>

           <h3>Position:</h3>

           <h3>Salary:</h3>

           <h3>Date of birth:</h3>
            
        </div>
        <div className="profile2">
          
            <h3>Father name:</h3>

            <h3>Mother name:</h3>

            <h3>Siblings:</h3>

            <h3>Mother language:</h3>

<h3>Skills:</h3>

<h3>Known Language:</h3>
       <h3> Marrital Status:</h3>

        <h3> Projects:</h3>

         <h3>Joining date:</h3>

        <h3> Experience:</h3>

        <h3> Position Type:</h3>


        </div>
        <div className="profile3">
            <div className="profileimage">
              <img src="" alt="" />
            </div>
            <h1>KAMALESH KUMAR</h1>
            <h4>(EMPLOYEE)</h4>
            <h3>Full stack developer</h3>
           </div>
      </div>
    </div>
  )
}

export default Employee