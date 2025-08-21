
import "./About.css";
import Lottie from "lottie-react";
function About() {
  return (
    <div className="bg-about">
       <title>About</title>
      <div className="about-container">
        <section className="left-about">
          <h1 className="about-title">Why BraveDude <span>Academy?</span></h1>
          <p className="about-description">
            At <strong>BraveDude Academy</strong>, we don’t just teach — we transform.
            Our programs blend real-world projects, industry mentorship, and hands-on
            learning to empower future tech leaders.
          </p>
          <p className="about-description">
            We go beyond textbooks and outdated slides. Our training is designed around
            real-time job demands, skill mastery, and innovation.
          </p>
          <p className="about-description">
            Whether you're a student seeking placement or a graduate looking to upskill,
            we help you build confidence, capabilities, and a career-ready portfolio.
          </p>
        </section>
        <section className="right-about">
          <Lottie/>
        </section>
      </div>

     
    
    </div>
  );
}

export default About;
