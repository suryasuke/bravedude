import Marquee from "react-fast-marquee";
import feeds from "../../assets/Feedbacks";
import "./Feedbacks.css";
import { useState } from "react";
import feeds2  from "../../assets/Feedbacks2";
function Feedbacks() {

    const [hover, setHover] = useState(false);
  return (
    <div className='feed-container'>
       <div className="feed-container">
        <p className="std-rev">STUDENT REVIEW</p>
        <h1>Hear from students like you</h1>
  <div className="feed-scroll-wrapper">
 
    <Marquee pauseOnHover={hover} direction="left" speed={15} gradient={false}>
      <section className="fst-roll" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        {feeds.map((feed, index) => (
          <div className="feed-card" key={index}>
            <div className="feed-img">
              <img src={feed.img} alt="" />
              <p>{feed.name}<br></br><span>@ {feed.work}</span></p>
            </div>
            <div className="feed-text">
              <p>{feed.feedback}</p>
            </div>
          </div>
        ))}
      </section>
    </Marquee>

   
    <Marquee pauseOnHover={hover} direction="right" className="right-second" speed={15} gradient={false}>
      <section className="second-roll" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        {feeds2.map((feed, index) => (
          <div className="feed-card" key={index}>
            <div className="feed-img">
              <img src={feed.img} alt="" />
              <p>{feed.name}</p>
            </div>
            <div className="feed-text">
              <p>{feed.text}</p>
            </div>
          </div>
        ))}
      </section>
    </Marquee>

   
    <div className="fade-overlay leftBlur"></div>
    <div className="fade-overlay rightBlur"></div>
  </div>
</div>

          
    </div>
  )
}

export default Feedbacks;
