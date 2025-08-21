import React, { useEffect, useState } from 'react'
import './AddStudents.css'
import { addstudent } from '../../API/addStudent';
import Alert from '@mui/material/Alert';

function AddStudents() {
  
  const [student, setStudent] = useState({
    name: '',
    course: '',
    phone: '',
    email: '',
    dob: ''
  });
  const [reply , setreply] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(()=>{
     window.scrollTo(0,0);
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Student Added:", student);
    try{
      const result  = await addstudent(student);
      setreply (result.data.message)
    }catch{
      setreply({state: 'error', text: 'Failed to add student. Please try again.'});
    }
    finally{
      setTimeout(() => {
        setreply(null);
      }, 3000);
    }
   
    setStudent({
      name: '',
      course: '',
      phone: '',
      email: '',
      dob: ''
    });
  };

  return (
    <div className='AddStudents-container'>
          <div className='alert-cont-feedback'>
      {reply?<Alert severity={reply.state} style={{border : '1px solid green' , color : 'green' , fontWeight : '500'}}>{reply.text}</Alert> : ''}
            </div>
      <div className="feedback-box">
             <title>Add student</title>
            <h2>Add student</h2>
            <form onSubmit={handleSubmit} className='feedback-form-elephant'>
              <label>Student Name</label>
              <input
                type="text"
                name="name"
                value={student.name}
                id='fs-input'
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
               <label>Student MB.no</label>
              <input
                type="text"
                name="phone"
                value={student.phone}
                id='fs-input'
                placeholder="Mobile number"
                onChange={handleChange}
                required
              />
              <label>Student DOB</label>
              <input
                type="text"
                name="dob"
                value={student.dob}
                id='fs-input'
                placeholder="DOB (FORMATE - dd/mm/yy)"
                onChange={handleChange}
                required
              />
    
              <label>Student Email</label>
              <input
                type="email"
                id='fs-input'
                name="email"
                value={student.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
  
    
              <label>course</label>
              <input
                name="course"
                id='fs-input'
                value={student.course}
                placeholder="course"
                onChange={handleChange}
                required
              ></input>
        <button className='btn-feed-sbmt' type="submit">Add student</button>
            </form>
          </div>
    </div>
  )
}

export default AddStudents
