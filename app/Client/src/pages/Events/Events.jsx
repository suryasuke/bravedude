import React, { useEffect } from "react";
import "./Events.css"; // import CSS file
import intern from "../../assets/interns";
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from 'react-router-dom'
import faq from '../../assets/faq'
import comments from '../../assets/comments'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';

function Events() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])



  return (
    <div className="events-page">
      <div className="alert-intern">
       <p>Alert!!! Internships in Core domains and demand courses are going now</p>
      </div>
      <div className="intern-div">
          <p className='p-class-fst-why'>Internships</p>
      <p className='p-class-scnd-why'>Currently Internships are going on<hr className="hr-contact"/></p>
      
      <div className="content-intern-container">
   {
  intern.map((intern, index) => (
    <div className="card-intern" key={index}>
      <h3>{intern.topic}</h3>
      <p className="desc">{intern.desc}</p>
      <p><strong>Mode:</strong> {intern.mode}</p>
      <p><strong>Location:</strong> {intern.location}</p>
      <p><strong>Projects:</strong> {intern.projects ? 'Available' : 'Not Available'}</p>
      <p className="certificate">
        <strong>Certificate:</strong> {intern.certificate ? <VerifiedIcon className="verified-icon" /> : 'No'}
      </p>
      <Link to='/Enroll-course' ><button className="intern-button">Go</button></Link>
    </div>
  ))
}

      </div>
     
      </div>
      <div className="intern-prepare">
        <p className="p-class-fst-intern">Next steps</p>
        <p className="p-class-scnd-intern">Prepare for interview to acceptable in Internship<hr className="hr-contact"/></p>
        <p className="list-intern-prepare">
       <ul>
  <li>
    Prepare for domain-specific interviews using trusted resources like{' '}
    <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener noreferrer">
      MDN Web Docs
    </a>{' '}
    — a comprehensive guide for HTML, CSS, JavaScript, and web APIs.
  </li>

  <li>
    Learn and practice data structures and algorithms with{' '}
    <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
      GeeksforGeeks
    </a>{' '}
    — ideal for coding interview preparation and domain-specific concepts.
  </li>

  <li>
    Master backend development with official documentation like{' '}
    <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">
      Node.js Docs
    </a>{' '}
    and{' '}
    <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
      Express Docs
    </a>.
  </li>

  <li>
    For Java development, explore{' '}
    <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">
      Oracle Java Documentation
    </a>{' '}
    and hands-on practice at{' '}
    <a href="https://www.javatpoint.com/" target="_blank" rel="noopener noreferrer">
      JavaTpoint
    </a>.
  </li>

  <li>
    Python learners can benefit from the official{' '}
    <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
      Python Docs
    </a>{' '}
    and tutorials at{' '}
    <a href="https://realpython.com/" target="_blank" rel="noopener noreferrer">
      Real Python
    </a>.
  </li>

  <li>
    For AI & ML, refer to{' '}
    <a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener noreferrer">
      scikit-learn Docs
    </a>{' '}
    and{' '}
    <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
      TensorFlow
    </a>{' '}
    for practical model development.
  </li>

  <li>
    Practice coding challenges and mock interviews on{' '}
    <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
      LeetCode
    </a>,{' '}
    <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">
      HackerRank
    </a>, and{' '}
    <a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer">
      Codewars
    </a>.
  </li>

  <li>
    For Prompt Engineering and AI tools like ChatGPT, follow tutorials and best practices on{' '}
    <a href="https://platform.openai.com/docs/guides/gpt" target="_blank" rel="noopener noreferrer">
      OpenAI Docs
    </a>.
  </li>
</ul>


        </p>
      </div>
      <div className="faq-section">
        <p className="p-class-fst-intern">FAQ</p>
  <p className="p-class-scnd-intern">Frequently Asked Questions (FAQ)<hr className="hr-contact"/></p>
  <ul className="faq-list">
  
  {
    faq.map((faq,index)=>{
      return(
         <li>
      <p className="qn-faq">
        {index+1}{') ' }{ faq.question}
      </p>
         <br></br>
      <p className="ans-faq">{faq.answer}</p>
    </li>
      )
     
    })
  }
  </ul>
</div>
    <div className="comments-container">
     <p className="p-class-fst-intern">comments</p>
  <p className="p-class-scnd-intern">See our internship feedbacks<hr className="hr-contact"/></p>
      {
         comments.map((comment)=>{
          return(
            <div className="comment-card"> 
            <p className="commenter"><AccountCircleIcon/>{comment.name}</p>
            <p><Rating name="size-small" defaultValue={comment.rating} readOnly /></p>
            <p className="feed-comment">{comment.feed}<hr className="hr-comment"></hr></p>
            </div>
           
          )
         })
      }
    </div>


    </div>
  );
}

export default Events;
