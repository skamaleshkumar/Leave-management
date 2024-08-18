import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'

function Dashboard() {
  return (
    <div>
      <div className="container">
    <div className="nav">
      <Link to="./Employee" id='link'>Home</Link>
      <Link to="./Admin" id='link'>About</Link>
      <Link to="./Idendity" id='link'>Login</Link>
      <Link to="./Update" id='link'>Contact</Link>
      
    </div>
  </div>

      <div className="section">
        <div className="title"><h1>Explore xpert</h1>
        <p> Travel opens doors to new experience,cultrues,and perspectives. it allowws us to break away from routine.explore unfamiliar landscape, and connect with poeple from diverse backgrounds.Whether it's a journey to bustling city or a serene natural wonder,travel enichs our lives with memories and lessons that stay with us forrever. it's an opprtunity to discover ourselves while discovering the world around us.</p>
        </div>
        <div className="cards">
          <div className="card">
          <img src="./src/assets/istockphoto-694370978-612x612.jpg" alt="img" />
          </div>
          <div className="card">
          <img src="./src/assets/istockphoto-649356542-612x612.jpg" alt="img" />
          </div>
          <div className="card">
          <img src="./src/assets/istockphoto-516449022-612x612.jpg" alt="img" />
          </div>
          <div className="card">
          <img src="./src/assets/bora-bora-3023437_640.jpg" alt="img" />
          </div>
        
        </div>
      </div>
      <div className="footer">
        <div className="footerimages">
          <img src="./src/assets/FB-1.png" alt="img1" />
          <img src="./src/assets/Linked_In.png" alt="img2" />
          <img src="./src/assets/Twitter.png" alt="img3" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard