import React from 'react'
import './Update.css'

function Update() {
    return (
        <div>
      <h1>Employee Information</h1>
      <div className="updatecontainer">
        <div className='updateform'>
          <form className='upform' action="">
            <div className='updateinputs'>
              <h4>Employee Code</h4>
              <input id='input' type="text" />
            </div>
            <div className='updateinputs'>
              <h4>Email</h4>
              <input id='input' type="email" />
            </div>
            <div className='updateinputs'>
              <h4>Password</h4>
              <input id='input' type="password" />
            </div>
            <div className='updateinputs'>
              <h4>Confirm Password</h4>
              <input id='input' type="password" />
            </div>
            <div className='updateinputs'>
              <h4>City/Town</h4>
              <input id='input' type="text" />
            </div>
            <div className='updateinputs'>
              <h4>Mobile Number</h4>
              <input id='input' type="text" />
            </div>
            <div className='updateinputs'>
              <h4>Birth Date</h4>
              <input id='input' type="date" />
            </div>
            <div className='updateinputs'>

              <h4>Country</h4>
              <input id='input' type="text" />
            </div>
            <div className='updateinputs'>

              <h4>Gender</h4>
              <label>
                <input id='input' type="radio" name='myradio' value="male" />
                Male</label><br />
              <label>
                <input id='input' type="radio" name='myradio' value="female" />
                Female</label>
            </div>
            <div className='updateinputs'>

              <h4>Department</h4>
              <input id='input' type="text" />
            </div>
            <div className='updateinputs'>
              <h4>Position</h4>
              <input id='input' type="text" />
            </div>
            <div className='updateinputs'>
              <h4>Salary</h4>
              <input id='input' type="text" />
            </div>

          <input type='submit' id='btn'/>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Update