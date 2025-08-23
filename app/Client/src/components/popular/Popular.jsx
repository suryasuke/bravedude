import Course from '../../assets/Course';
import './Popular.css'
import SplashText from '../../ui/SplashText';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom';
function Popular() {
  return (
    <div className='popular-cnt'>
    
      
            <div id='head-course'>

             <div className='tituko'>
              <div className='tituko-text' style={{zIndex : '2'}}>
<p  className='p-class-fst'> OUR PROGRAM</p>
        <p className='p-class-scnd' >Discover Our Premier, Top-Rated Learning <SplashText text={"Program"} color={"black"}/><hr className="hr-contact"/></p>
              </div>
  
        </div>
<div className="course-items">
        
            <div className='popular-head'>
              <div><h2 className="course-item-title">{Course[0].Title}</h2>
                </div> 
                <div id='go-btn'><Link to='/course' style={{textDecoration : 'none'}} ><button className='check-course' ><ArrowCircleRightIcon  fontSize='20px' /></button></Link></div> 
          <br></br>
            </div>
           <p className="course-descriptions">{Course[0].Description}</p> <hr></hr>
          
         

          <div className="course-peta">
            <div className="course-item-mode">
              {Course[0].Mode.includes("Online") && "🧑‍💻"}
              {Course[0].Mode.includes("Offline") && "🏫"} {Course[0].Mode}
            </div>
            <div className="course-item-duration">🕒 {Course[0].Duration}</div>
            <div className="course-item-level">📘 {Course[0].Level}</div>
            <div className="course-item-rating">⭐ {Course[0].Rating}</div>
          </div>

          <div className="course-item-topicss">
            {Course[0].Topics.map((value, index) => {
            
              return (
                <span
                  key={index}
                  style={{
                    
                  }}
                >
                  {value.crse}
                  {value.IMG && (
                    <img
                      src={value.IMG}
                      alt=''
                      style={{ width: '20px', height: '20px', marginLeft: '6px' }}
                    />
                  )}
                </span>
              );
            })}
          </div>
        </div>
        </div>
      
         
    </div>
  )
}

export default Popular
