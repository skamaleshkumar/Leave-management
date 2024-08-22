import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
function Response() {
  
    


  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/leaves');
        setLeaves(response.data);
      } catch (error) {
        console.error('There was an error fetching the leave list!', error);
      }
    };}
  )

   

  return (
    <div>
      <h2>Leave List</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Type of Leave</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.employeeName}</td>
              <td>{leave.typeOfLeave}</td>
              <td>{leave.startDate}</td>
              <td>{leave.endDate}</td>
              <td>{leave.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Response