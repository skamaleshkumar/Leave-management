import React from 'react'
import './Update.css'
import { useState } from 'react'

function Update() {
  const [inputarr,setInputarr]=useState([])
  const [inputdata,setInputdata]=useState({
    code:""
  })
  function changehandle(e){
    setInputdata({...inputdata,[e.target.name]:e.target.value})
   

  }
  let {code}=inputdata
  function changhandle(){
    setInputarr([...inputarr,code])
    console.log(inputarr)
    console.log(inputdata)
    setInputdata({code:""})
  }
    return (
        <div>
      <h1>Employee Information</h1>
      <div className="updatecontainer">
        <div className='updateform'>
          <form className='upform' action="">
            <div className='updateinputs'>
              <h4>Employee Code</h4>
              <input 
              id='input' 
              type="text"  
              name='code' 
              value={inputdata.code} 
              onChange={changehandle} />
            </div>
            <div className='updateinputs'>
              <h4>Email</h4>
              <input id='input1' type="email"  name='email' 
              value={inputdata.email} 
              onChange={changehandle}/>
            </div>
            <div className='updateinputs'>
              <h4>Password</h4>
              <input id='input2' type="password"
               name='password' 
               value={inputdata.password} 
               onChange={changehandle} />
            </div>
            <div className='updateinputs'>
              <h4>Confirm Password</h4>
              <input id='input3' type="password"
               name='conpassword' 
               value={inputdata.conpassword} 
               onChange={changehandle} />
            </div>
            <div className='updateinputs'>
              <h4>City/Town</h4>
              <input id='input4' type="text"
               name='city' 
               value={inputdata.city} 
               onChange={changehandle} />
            </div>
            <div className='updateinputs'>
              <h4>Mobile Number</h4>
              <input id='input5' type="text" 
               name='mobile' 
               value={inputdata.mobile} 
               onChange={changehandle}/>
            </div>
            <div className='updateinputs'>
              <h4>Birth Date</h4>
              <input id='input6' type="date"
               name='dob' 
               value={inputdata.dob} 
               onChange={changehandle} />
            </div>
            <div className='updateinputs'>

              <h4>Country</h4>
              <input id='input7' type="text"
               name='country' 
               value={inputdata.country} 
               onChange={changehandle} />
            </div>
            <div className='updateinputs'>

              <h4>Gender</h4>
              <label>
                <input id='input8' type="radio" name='myradio' value="male" />
                Male</label><br />
              <label>
                <input id='input8' type="radio" name='myradio' value="female" />
                Female</label>
            </div>
            <div className='updateinputs'>

              <h4>Department</h4>
              <input id='input9' type="text" 
               name='department' 
               value={inputdata.department} 
               onChange={changehandle}/>
            </div>
            <div className='updateinputs'>
              <h4>Position</h4>
              <input id='input10' type="text"
               name='position' 
               value={inputdata.position} 
               onChange={changehandle} />
            </div>
            <div className='updateinputs'>
              <h4>Salary</h4>
              <input id='input11' type="text" 
               name='salary' 
               value={inputdata.salary} 
               onChange={changehandle}/>
            </div>

          <input type='submit' onClick={changhandle} id='btn'/>
          </form>
        </div>
      </div>
      <div className="table">
            <table>
                <tbody>
                <tr>
                    <th>EmployeeId</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>City/Town</th>
                    <th>Mobile</th>
                    <th>Birth date</th>
                    <th>Country</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Position</th>
                    <th>Salary</th>
                    
                </tr>
                {
                    inputarr.map(
                        (info,ind)=>{
                            return(
                                <tr key={ind}>
                                    <td>{info.code}</td>
                                </tr>
                            )

                        }
                    )
                }
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Update