import React from 'react'
import './Request.css'

function Request() {
  return (
    <div>
      <div className="reqform">
        <form action="">
           <h4>Name</h4>
            <input type="text" />
            <h4>Email</h4>
            <input type="email" />
            <h4>Startdate</h4>
            <input type="date" />
            <h4>Enddate</h4>
            <input type="date" />
            <h4>Reason</h4>
            <input type="text" />
            <h4>Document</h4>
            <input type="file" />
            <h4>Leave Type</h4>
            <input type="text" /><br />
            <button>SUBMIT</button>

        </form>
        </div>
    </div>
  )
}

export default Request