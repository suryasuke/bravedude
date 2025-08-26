import course from '../../assets/Course';
import BoltIcon from '@mui/icons-material/Bolt';
import Lottie from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import './Course.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Celebrations from '../../assets/json/Celebration.json';
import sad from '../../assets/json/sad.json'
import arrow from '../../assets/Images/up_arrow.png'

function Course() {
  const [celebrations, setcelebrations] = useState(true);
  const [topicsColors, setTopicsColors] = useState({});
  const [SearchCourse, setSearchCourse] = useState('');
  const arrowref = useRef(null);
  console.log(arrowref)

  function goup(){
    window.scrollTo({ top:0 , behavior :'smooth'})
  }

  useEffect(() => {

     
  const handleScroll = () => {
    if (window.scrollY > 200) {
      arrowref.current?.classList.add('active-arrow');
      arrowref.current?.classList.remove('inactive-arrow');
    } else {
      arrowref.current?.classList.add('inactive-arrow');
      arrowref.current?.classList.remove('active-arrow');
    }
  };

  window.addEventListener('scroll', handleScroll);
    handleScroll();

    const timer = setTimeout(() => {
      setcelebrations(false);
    }, 5000);

    window.scrollTo(0, 0);

    const colors = {};
    course.forEach(item => {
      item.Topics.forEach(value => {
        if (!colors[value.crse]) {
          colors[value.crse] = `hsl(${Math.floor(Math.random() * 360)}, 70%, 85%)`;
        }
      });
    });
    setTopicsColors(colors);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    } 
  }, []);

  const navigate = useNavigate();

  const handleSearch = e => {
    e.preventDefault();
    setSearchCourse(e.target.value);
  };

  function navigateToEnroll(value) {
    navigate('/Enroll-course', { state: value });
  }

  return (
    <>
      <title>courses</title>

      {celebrations && (
        <Lottie
          animationData={Celebrations}
          loop={true}
          className="lottie-celebrations"
          width={'500px'}
          height={'500px'}
        />
      )}

      <div className="course-container">
        
                 <img src={arrow} onClick={goup} alt='up_arrow' ref={arrowref} className='up-arrow'/>

        <div className="course-list">
          <div className="course-tit">
            <p>
              Available courses <StarIcon style={{ borderRadius: '7px' }} />
            </p>
            <section id="search-cont">
             
  <input
    type="search"
    placeholder="Search by keyword"
    className="search-course pr-10"
    onChange={handleSearch}
    value={SearchCourse}
  />



            </section>
          </div>
          {(() => {
            const filteredCourses = course.filter(
              item =>
                item.Title.toLowerCase().includes(SearchCourse.toLowerCase()) ||
                item.Description.toLowerCase().includes(SearchCourse.toLowerCase())
            );

            if (filteredCourses.length === 0) {
              return (
                <div className="no-key">
                  <Lottie animationData={sad} loop={true} autoPlay={true} className='sad-animation-404'/>
                  <p>No courses available for this keyword.</p>
                </div>
              );
            }
            return (
              <div className="whole-course-contain">
                {filteredCourses.map((item, index) => (
                  <div className="course-item" key={index}>
                    <div className="overlay"></div>
                    {item.Badge && (
                      <div className="course-badge">
                        {item.Badge}
                        <BoltIcon />
                      </div>
                    )}
                    <h2 className="course-item-title">{item.Title}</h2>
                    <p className="course-description">{item.Description}</p>

                    <div className="course-item-topics-cour">
                      {item.Topics.map((value, idx) => {
                        const color = topicsColors[value.crse] || '#eee';
                        return (
                          <span key={idx} style={{ backgroundColor: color }}>
                            {value.crse}
                            {value.IMG && (
                              <img
                                src={value.IMG}
                                alt=""
                                style={{
                                  width: '20px',
                                  height: '20px',
                                  marginLeft: '6px',
                                }}
                              />
                            )}
                          </span>
                        );
                      })}
                    </div>

                    <hr />

                    <div className="second-card">
                      <div className="course-meta">
                        <div className="course-item-mode">
                          {item.Mode.includes('Online') && '🧑‍💻'}
                          {item.Mode.includes('Offline') && '🏫'} {item.Mode}
                        </div>
                        <div className="course-item-duration">🕒 {item.Duration}</div>
                        <div className="course-item-level">📘 {item.Level}</div>
                        <div className="course-item-rating">⭐ {item.Rating}</div>
                      </div>
                      <button
                        className="btn-Enroll-Now"
                        onClick={() => navigateToEnroll(item.Title)}
                      >
                        Enroll
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </div>
    </>
  );
}

export default Course;
