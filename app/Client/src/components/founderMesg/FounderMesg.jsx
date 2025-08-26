import React from 'react'
import './FounderMesg.css'


function FounderMesg() {
  return (
    <div className="success-stories">
  <p className='p-class-fst-why'>Success Stories</p>
  <p className='p-class-scnd-why'>
    See what our Founder says
    <hr className="hr-contact" />
  </p>

  <section className="video-xntx">
    <div className="video-container">
      <iframe
        width="100%"
        height="100%"
        src=''
        title="Founder Message"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="summary-text">
      <h3>From the Founder</h3>
      <p className='summary-text-desc-li'>“We believe in giving students real-world exposure through hands-on internships. What started as a small initiative is now helping hundreds find their passion and profession.”</p>
      <p className='summary-text-desc-li'>Our interns have gone on to build startups, land jobs at top companies, and pursue higher education with a clear vision.</p>
      <ul className='summary-text-desc-li'>
        <li>Over 100+ students trained</li>
        <li>Good placement/internship success rate</li>
        <li>Partnerships with top IT firms and startups</li>
      </ul>
    </div>
  </section>
</div>
  )
}

export default FounderMesg
