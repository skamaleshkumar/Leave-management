export const emailValidator = email=>{
    const emailRegex= '/^[^\s@]+@[^\s@]+$/';
    return emailRegex.test(email)
}


export const passwordValidator = password=>{
    const passwordRegex= '/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$^&*-]).{8,}$/';
    return passwordRegex.test(password)
}
import React from 'react'



function Employee() {
  
  const [formData, setFormData] = useState({
    employeeName: '',
    typeOfLeave: '',
    startDate: '',
    endDate: '',
    reason: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/leaves', formData);
      alert('Leave request submitted');
    } catch (error) {
      console.error('There was an error submitting the leave request!', error);
    }
  };
  return (
  <div>
  <div className="form">
    <form onSubmit={handleSubmit}>
      <label>
        Employee Name:
        <input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} required />
      </label>
      <label>
        Type of Leave:
        <input type="text" name="typeOfLeave" value={formData.typeOfLeave} onChange={handleChange} required />
      </label>
      <label>
        Start Date:
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
      </label>
      <label>
        Reason:
        <textarea name="reason" value={formData.reason} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Employee