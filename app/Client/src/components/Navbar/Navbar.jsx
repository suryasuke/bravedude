import React, { useEffect , useState} from 'react';
import './Navbar.css';
import cv from '../../assets/Images/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { MegaMenu } from 'primereact/megamenu';
import items from '../../assets/items';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {motion} from 'framer-motion'

function Navbar() {
 const [menu, setMenu] = useState(false);
const [animating, setAnimating] = useState(false);

function handleClick(){
setAnimating(true);

setTimeout(()=>{
 setMenu((prev)=>{
   return !prev
  }); 
  setAnimating(false);
 
},200)
}


useEffect(()=>{
window.scrollTo(0 , 0);

function handleScroll() {
  const navbar = document.querySelector('.container');
  if(window.scrollY > 200){
    navbar.classList.add('scrolled');
    navbar.classList.remove('eff-scroll');
  }
  else if(window.scrollY === 0 ){
    navbar.classList.remove('scrolled');
    navbar.classList.add('eff-scroll');
  }
}

window.addEventListener('scroll' , handleScroll);

return ()=>{
    window.removeEventListener('scroll' , handleScroll);
}

},[])




  return (
    <>
  
    
      <div className='container'>
    
        <div className='left'>
          <div className='logo-cont'>
            <img className='logo-cont-img' src={cv} alt='logo' />
          </div>

           <div className="card-container">
            <MegaMenu model={items} breakpoint="960px" className='card' />
        </div>
        
        </div>
        <div className='right'>
          <Link className='dashboard' to='/' style={{textDecoration : 'none' , color : 'gray'}}><h3> <HomeIcon /> Dashboard</h3></Link>
          <button className=' tgl-btn' > 
            <span onClick={handleClick} className={`icon-wrapper  ${animating ? 'icon-exit' : 'icon-enter'}`}>
              {menu ?  <CloseIcon/>  : <MenuIcon />}
            </span>
          </button>
        </div>
      </div>
      {
        menu &&
        <motion.div
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 80, opacity : 1 }}
  transition={{ duration: 0.3 }}
  style={{ position: 'relative', zIndex: 99999 }}
>

             <div className='menus-mobile'>
        <div className={`mobile-menu ${menu ? 'active' : 'inactive'}`}>
          <ul className='mobile-list'>
            <li onClick={()=>setMenu(false)}><Link to='/' style={{textDecoration : 'none'}}>Home</Link></li>
            <li onClick={()=>setMenu(false)}><Link to='/careers'  style={{textDecoration : 'none'}}>Careers</Link></li>
            <li onClick={()=>setMenu(false)}><Link to='/College-event'  style={{textDecoration : 'none'}}>For colleges</Link></li>
            <li onClick={()=>setMenu(false)}><Link to='/Internships'  style={{textDecoration : 'none'}}>Internships</Link></li>
            <li onClick={()=>setMenu(false)}><Link to='/course'  style={{textDecoration : 'none'}}>Course</Link></li>
              <li onClick={()=>setMenu(false)}><Link to='/feedback-share'  style={{textDecoration : 'none'}}>share feedback</Link></li>
          </ul>
        </div>
      </div>
        </motion.div>
       }

    </>
  );
}

export default Navbar;
