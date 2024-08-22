import { useState} from 'react'
import React from 'react'
import './Login.css'
import axios from "axios"
import { useNavigate,Navigate } from 'react-router-dom'
        


 

function Login() {
  const navigateTo=useNavigate()
  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState(' ')
  async function submit(e){
    e.preventDefault()

    try{
      await axios.post("http://localhost:3001/api/v1/user/Login",{
        email,password
      },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(res=>{
        if(res.data == "exist"){
          return <Navigate to= {"/employee"} />

        }
        else if(res.data="not exist"){
          alert("user have not signup")

        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e)
      })
    }
    catch(e){
      console.log(e);

    }
  }
  
  return (
      <div className="container">
        <div className="container1"></div>
        <div className="container2"></div>

        <div className="login">
          <div className="text">Login</div>
          <div className="form">
            <form action='POST'>
            <div className="inputs">
            <div className="input">
              <h4>User/Email</h4>
                <input  placeholder='Email' type="email" name="email" onChange={ (e)=>{setEmail(e.target.value)}}/>
              </div>
              <div className="input">
              <h4>Password</h4>
                <input  placeholder='Password' type="password" name="password" onChange={ (e)=>{setPassword(e.target.value)}} />
              </div>
              <div className="btn"><button onClick={submit}>submit</button>
              </div> 
            </div>
            </form>
          </div>
        </div>
      </div>
  )
}
export default Login
