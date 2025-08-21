import { useState } from 'react'
import './LightFooter.css'
import Switch from '@mui/material/Switch';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LightFooter() {

    const [LightControl, setLightControl] = useState(false);

    function handlelight(){
        setLightControl((prev)=>{
           return !prev; 
        })
    }
    const navigate = useNavigate()
  return (
    <div className='LF-container'>


      
    <section className='Menus'>
       <h2 className='let-be-part'>#Let be a part of us<span>❤️</span></h2>
       <div className='inner-menu'>
          <ul className='lists'>
        <li onClick={()=>{navigate('/Enroll-course')}}>Contact us</li>

       <Link to='#collab' style={{textDecoration :'none' , color :'white'}}><li>Collobrate with us</li></Link> 
       </ul>
      
        <ul className='lists'>
        <li onClick={()=>{navigate('/careers')}} >Careers</li>
        <li onClick={()=>{navigate('/secret-Auth_fes')}}>Admin Process</li>
        <li onClick={()=>{navigate('/Give-credentials')}}>Give Crendentials</li>
         <li onClick={()=>{navigate('/verify-certificate')}}>Verify</li>
       </ul>
       </div>
    
       <ul className='lists-row-cons'>
        <li>Follow us on</li>
        <li><LinkedInIcon/></li>
        <li><InstagramIcon/></li>
        <li><WhatsAppIcon/></li>
        <li><LinkedInIcon/></li>
       </ul>
       
       
    <ul className='lists-brave'>
        <li>© 2025 BraveDude. All Rights Reserved.</li>
       </ul>
      
  
    </section>
    <section className='lights-section'>
        <div className='ligt-container'>
         <div className={`light1 ${LightControl ? 'on' : ''}`}></div>
         <div className={`light2 ${LightControl ? 'on' : ''}`}></div>
         <div className={`light3 ${LightControl ? 'on' : ''}`}></div>
        </div>
      
        <div>
           <div className="hanging-switch">
            <button>
                 <Switch onClick={handlelight} checked={LightControl ? true : false}/>
            </button>
 
</div>
        </div>
         
         
        
    </section>
      
    </div>
  )
}

export default LightFooter
