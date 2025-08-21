
 import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
  import './GiveCred.css'
import  { giveCertificate } from '../../API/addStudent'
function GiveCred() {

  useEffect(()=>{
    window.scrollTo(0,0);
  })
  const [message, setmessage] = useState('');
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
        const result  = await giveCertificate(student)
         setmessage(result.data.message);
          }catch{
           setmessage({ text: 'The student is not added into the database and crendentials not given', state: 'error' })
          }
          finally{
            setreply(true);
            setTimeout(()=>{
    setreply(false);
            },4000)
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
            {reply?<Alert severity={message.state} style={{border : '1px solid green' , color : 'green' , fontWeight : '500'}}>{message.text}</Alert> : ''}
                  </div>
            <div className="feedback-box">
                   <title>Give credentials</title>
                  <h2>Add certification</h2>
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
                     <label>course</label>
                    <input
                      type="text"
                      name="course"
                      value={student.course}
                      id='fs-input'
                      placeholder="course"
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

              <button className='btn-feed-sbmt-certification' type="submit">Give certification</button>
                  </form>
                </div>
          </div>
        
    
      
   
  )
}

export default GiveCred
