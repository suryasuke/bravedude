import React, { useEffect } from 'react'
import './Careers.css'
import img from '../../assets/Images/career.jpg'

function Careers() {

useEffect(()=>{
   const img = document.querySelector("#IMG-container img");

  if (img && !img.complete) {
    img.onload = () => window.scrollTo(0, 0);
  } else {
    window.scrollTo(0, 0);
  }
} , [])


  const openings = [
  {
    title: "Java Trainer",
    type: "Part-Time / Contract",
    location: "Chennai, India",
    description: "Trainer with expertise in Core Java, Advanced Java, and Spring Boot. Prior teaching experience preferred.",
    color: "#ff8c42" // orange
  },
  {
    title: "Python Trainer",
    type: "Part-Time / Contract",
    location: "Remote / On-site",
    description: "Trainer with strong knowledge in Python, Django/Flask, and Data Science basics.",
    color: "#4287f5" // blue
  },
  {
    title: "Full Stack Trainer",
    type: "Full-Time",
    location: "Bangalore, India",
    description: "Trainer experienced in both frontend (React/Angular) and backend (Node.js, Java, or Python).",
    color: "#9b59b6" // purple
  },
  {
    title: "MERN Stack Trainer",
    type: "Full-Time / Contract",
    location: "Chennai, India",
    description: "Trainer with expertise in MongoDB, Express, React, and Node.js. Hands-on project training required.",
    color: "#16a085" // teal
  },
  {
    title: "Corporate Trainers (Multiple Domains)",
    type: "Freelance / Contract",
    location: "India (Multiple Cities)",
    description: "We are hiring trainers for C, C++, Data Structures, Aptitude, Communication Skills, and more as per client needs.",
    color: "#e84393" // pink
  }

  ];

  return (
    <div className='Careers-container'>
      <div id='IMG-container'>
        <img src={img} alt='img-career' />
      </div>
      <div className='careers-content'>
        <h1>Join Our Team</h1>
        <p>We are looking for passionate individuals to join our team. If you are interested in any of the following positions, please apply!</p><p className='mail-to-us'>Send your resume to: bravedudeacademy@gmail.com</p>
         </div>
       
        <div className='job-container'>
            {
                openings.map((data)=>{
                    return(
                       <div className='job-card' style={{backgroundColor : data.color}}>
                     <h2>{data.title}</h2>
                     <p className='description-job'>{data.description}</p>
                     <p className='location-job'>{data.location}</p>
                     <p className='type-job'>{data.type}</p>
                     <button className='job-apply'>Apply</button>
                    </div>
                    ) 
                    
                })
            }
        </div>
      </div>

  )
}

export default Careers
