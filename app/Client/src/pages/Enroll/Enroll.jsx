import Lottie from 'lottie-react';
import React, { use, useEffect, useState } from 'react';
import Launch from '../../assets/Launch.json';
import locations from '../../assets/json/city.json';
import { useLocation } from 'react-router-dom';
import './Enroll.css';
import degrees from '../../assets/json/degree.json';
import Titles from '../../assets/giveUsCall';
import { submitEnroll } from '../../API/Enroll';
import { LinearProgress } from "@mui/material";
import WarningIcon from '@mui/icons-material/Warning';

function Contact() {
  const routerLocation = useLocation();
  const courseValue = routerLocation.state || '';
  const [reply , setreply] = useState();
const [colorAlert , setColorAlert] = useState(); 
const [load , setLoad] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [filteredDegrees, setFilteredDegrees] = useState([]);

  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    degree: '',
    location: '',
  });

  useEffect(() => {
    if (courseValue) {
      setDetails(prev => ({ ...prev, course: courseValue }));
    }
    window.scrollTo(0, 0);
  }, [courseValue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));

    if (name === 'location') {
      handleLocationFilter(value);
    }

    if (name === 'degree') {
      handleDegreeFilter(value);
    }
  };

  
  const handleLocationFilter = (value) => {
    if (!value.trim()) {
      setFilteredLocations([]);
      return;
    }
    setFilteredLocations(
      locations.filter(loc =>
        loc.district.toLowerCase().includes(value.toLowerCase()) || loc.state.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleLocationClick = (city) => {
    setDetails(prev => ({ ...prev, location: city }));
    setFilteredLocations([]);
  };

 
  const handleDegreeFilter = (value) => {
    if (!value.trim()) {
      setFilteredDegrees([]);
      return;
    }
    setFilteredDegrees(
      degrees.filter(deg =>
        deg.degree.toLowerCase().startsWith(value.toLowerCase().slice(0, 2))
      )
    );
  };

  const handleDegreeClick = (degName) => {
    setDetails(prev => ({ ...prev, degree: degName }));
    setFilteredDegrees([]);
  };

  
  const sendData = async (e) => {
    e.preventDefault();
    setLoad(true);
    try{
          if(details){
           const result = await submitEnroll(details);
           console.log(result , "from api to controller")
           if(result.message.error){
            setColorAlert("red");
           }
           else if(result.message.done){
            setColorAlert("green");
           }
           
           setreply(result.message.done || result.message.error);
           console.log('final reply' , reply)
           setTimeout(()=>{
           setreply("");
           } , 5000)

           
          }
    }catch{
        setreply(`${<WarningIcon/>} Something went wrong`)

        setTimeout(()=>{
setreply("");
        } ,5000)
    }
    finally{
      setLoad(false);
    } 
    
    setDetails({
      name: '',
      email: '',
      phone: '',
      course: '',
      degree: '',
      location: '',
    });
    setFilteredLocations([]);
    setFilteredDegrees([]);
  };

  return (
    
    <div className='conatiner-contact-act'>
  <div className="star-layer"></div>
  <div className="shooting-star" style={{ left: "20%", animationDelay: "5s" }}></div>
  <div className="shooting-star" style={{ left: "50%", animationDelay: "10s" }}></div>
  <div className="shooting-star" style={{ left: "80%", animationDelay: "15s" }}></div>

      { reply &&
        <div className='reply-container-enroll'>
         <div className='reply' style={{backgroundColor : colorAlert , color : "white"}}>{reply}</div>
        </div>
       }
         
      <title>Enroll</title>
      <div className='left-contact-yellow'>
        <h2>Contact us to Enroll</h2>
        <p className='let-us'>Let us know your queries, feedbacks and enquiries. We are here to support you 24/7.</p>
        <hr></hr>
        {
          Titles.map((value)=>{
          return(
          <div className='ctn-value-container'>
            <  value.icons className='icons-contact-left'/>
            <span className='contact-number-container'>
              <p className='number-tit'>{value.title}</p>
              <p className='number-val'>{value.value}</p>
              <hr className="hr-contact" />
            </span>
          </div>
            )
         
          })
         
        }

      </div>
      <Lottie className="bg-of-contact" animationData={Launch} />
      <div
        className="contact-container right-contact-yellow"
        
        onClick={() => {
          setFilteredLocations([]);
          setFilteredDegrees([]);
        }}
      >
        
        <form onSubmit={sendData} className='enroll-form'>
          <p>Enroll on your course</p>
          <hr className="hr-contact" />

          <input
            placeholder="Name"
            name="name"
            className="input-contact"
            value={details.name}
            onChange={handleChange}
            required
          />

          <input
            placeholder="Phone"
            name="phone"
            className="input-contact"
            value={details.phone}
            onChange={handleChange}
            required
          />

          <select
            required
            name="course"
            value={details.course}
            onChange={handleChange}
          >
            <option value="" disabled>
              {courseValue || 'Select Your Course'}
            </option>
            {[
              'MERN Full Stack',
              'Python',
              'Front-end Development',
              'Backend Development',
              'Java Full Stack',
              courseValue &&
                ![
                  'MERN Full Stack',
                  'Python',
                  'Front-end Development',
                  'Backend Development',
                  'Java Full Stack',
                ].includes(courseValue) &&
                courseValue,
            ]
              .filter(Boolean)
              .map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
          </select>

          <input
            className="input-contact"
            type="email"
            name="email"
            placeholder="Email"
            value={details.email}
            onChange={handleChange}
            required
          />

          <div className="location-wrapper">
            <input
              className="input-contact"
              type="text"
              placeholder="Degree?"
              value={details.degree}
              name="degree"
              required
              onChange={handleChange}
            />
            {filteredDegrees.length > 0 && (
              <div className="suggestions">
                {filteredDegrees.map((deg, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleDegreeClick(deg.degree)}
                  >
                    {deg.degree}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="location-wrapper">
            <input
              required
              className="input-contact"
              type="text"
              placeholder="Location"
              name="location"
              value={details.location}
              onChange={handleChange}
            />
            {filteredLocations.length > 0 && (
              <div className="suggestions">
                {filteredLocations.map((loc, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleLocationClick(loc.district)}
                  >
                    {loc.district || loc.state}
                  </div>
                ))}
              </div>
            )}
          </div>
      {
        load ? <div className="progress"><LinearProgress color="success" /></div> : 
        <button className="course-sbmt" type="submit">
            GO Ahead
          </button>
      }
          
        </form>
       
      </div> 
    </div>
  );
}

export default Contact;
