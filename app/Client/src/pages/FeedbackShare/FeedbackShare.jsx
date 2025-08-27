import React, { useRef, useState, useEffect } from 'react';
import './Feedback.css';
import Lottie from 'lottie-react';
import TypingAnimation from '../../assets/json/Cat_typing.json';
import Alert from '@mui/material/Alert';
import { submitFeed } from '../../API/feed';
import { LinearProgress } from "@mui/material";
import Send from '../../assets/json/send.json'


function FeedbackShare() {
  const lottieRef = useRef();
  const sendref = useRef();
  const [feedAlert , setfeedAlert] = useState(false);
  const [message, setmessage] = useState('');
  const [load , setLoad] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: ''
  });

  const typingTimeout = useRef(null);
  useEffect(() => {
    window.scrollTo(0,0);
    if (lottieRef.current) {
      lottieRef.current.pause(); 
    }
  }, []);

 const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((PREV)=>{
     return {
      ...PREV , [name] : value 
     }
    })

    if (lottieRef.current) {
      lottieRef.current?.play();

      clearTimeout(typingTimeout.current);
      
      typingTimeout.current = setTimeout(() => {
        lottieRef.current?.pause();
      }, 500);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    setTimeout(() => {
  sendref.current?.play();
}, 100);
  try{
    const result  = await submitFeed(formData)
    setmessage(result.data.message)
  }
  catch{
  setmessage({
    text : "Somthing went wrong",
    state : "error"
  })
  }
    finally{
      setTimeout(()=>{
      setfeedAlert(true);
      setLoad(false);
      sendref.current?.stop();
    setTimeout(()=>{
     setfeedAlert(false)
    } , 4000);
    setFormData({
       name: '',
    email: '',
    rating: '',
    message: ''
    });
      },5000
    )
     
    }
    
    if (lottieRef.current) {
      lottieRef.current.pause();
    }
  };

  return (
    <div className="feedback-container">
      <div className='alert-cont-feedback'>
{feedAlert ?<Alert severity={message.state} style={{border : '1px solid green' , color : 'green' , fontWeight : '500'}}>{message.text}</Alert> : ''}
      </div>
      
      <div className="feedback-box">
         <title>share your feedback</title>
        <h2>Share Your Feedback</h2>
        <form onSubmit={handleSubmit} className='feedback-form-elephant'>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            id='fs-input'
            placeholder="Enter your name"
            onChange={handleChange}
            max={20}
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            id='fs-input'
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />

          <label>Rating</label>
          <select
            name="rating"
            id='fs-select'
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="5">🌟🌟🌟🌟🌟 (5)</option>
            <option value="4">🌟🌟🌟🌟 (4)</option>
            <option value="3">🌟🌟🌟 (3)</option>
            <option value="2">🌟🌟 (2)</option>
            <option value="1">🌟 (1)</option>
          </select>

          <label>Your Feedback</label>
          <textarea
            name="message"
            id='fs-textarea'
            value={formData.message}
            max={200}
            placeholder="Write your feedback here..."
            onChange={handleChange}
            required
          ></textarea>

          {load ? <div className="progress"><LinearProgress color="success" /></div>  
          : <button className='btn-feed-sbmt' type="submit">Submit Feedback</button> }
        </form>
      </div>

      <div className='feed-second-card'>
        {
          load ? <Lottie
          lottieRef={sendref}
          animationData={Send}
          loop={false}
          autoplay={false}

        />
        : <Lottie
          lottieRef={lottieRef}
          animationData={TypingAnimation}
          loop={true}
          autoPlay={false}
/>
        }
      </div>
    </div>
  );
}

export default FeedbackShare;
