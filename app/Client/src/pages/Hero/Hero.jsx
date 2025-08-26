import "./Hero.css";
import { motion } from "framer-motion";
import Feedback from "../../components/Feedbacks/Feedbacks";
import right from '../../assets/Images/right.png'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import TextType from "../../components/TextType/TextType";
import data from '../../assets/data'
import CountUp from "../../ui/CountUp";
import Popular from "../../components/popular/Popular";
import Whyus from "../../components/whyus/Why_Us";
import Community from "../../components/community/Community";
import Collabrate from "../../components/Collabrate/Collabrate";
import Bravedude from "../../components/Bravedude/Bravedude";
import FounderMesg from "../../components/founderMesg/FounderMesg";
function Hero() {


 const location = useLocation();



    useEffect(()=>{
 if( location.hash === "#feedback"||location.search.includes("feedback")){
      const feedback = document.querySelector("#feedbacks");
      if(feedback){
       feedback.scrollIntoView({ behavior: "smooth" });
     
        // const rect = feedback.getBoundingClientRect();
        // console.log(rect.top, rect.bottom);
      }
    }

    if(location.hash === "#collab" || location.search.includes("collab")){
      const collab = document.querySelector("#collab");
      if(collab){
        collab.scrollIntoView({behavior : "smooth"});
      }
    }

    },[location])

  return (
    <div className="home-container">
       <title>BraveDude | home</title>
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-left"
        >
          <h1 className="text-type">
        Helping you become outstanding
        by Making Tech <span className="text-type-bg"><TextType 
  text={data.map((value)=>{
    return value.text
  })}
  typingSpeed={80}
  className="text-type"
  cursorClassName="mass-color"
  pauseDuration={2000}
  showCursor={true}
  cursorCharacter="|"
/></span>
            </h1>
          <p className="subtext">
            <strong>BraveDude Academy is your gateway to the tech industry.</strong>
Gain hands-on experience through real-world projects, master in-demand skills, and earn industry-recognized certifications. Build, learn, and grow into a confident tech professional.
          </p>
          <Link to='/course'><button className="cta-btn">Get Started</button></Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-right"
        >
          <img src={right} className="right-img" alt="Academy" />
        </motion.div>
      </section>

      <div className="circle-blur-rgt">
       
     </div>

  
      <section className="stats">
        <div className="stat"><h1><CountUp
  from={0}
  to={5000}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>+</h1><p>Impact on Students</p></div>
        <div className="stat"><h1><CountUp
  from={0}
  to={1.5}
  
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>M+</h1><p>Digitally Reached</p></div>
        <div className="stat"><h1><CountUp
  from={0}
  to={47}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>+</h1><p>Viewers Globally</p></div>
        <div className="stat"><h1><CountUp
  from={0}
  to={15}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>LPA</h1><p>Highest CTC</p></div>
      </section>
       <div id='feedbacks'>
        <Feedback/>
        </div>  
        <Popular/>
      <Footer/>
      <Whyus/>
     
      <Community/>
      <div id="collab">
        <Collabrate/>
      </div>
    <FounderMesg/>
      <Bravedude/>
    </div>
  );
}

export default Hero;
