import React, { useState } from "react";
import "./background.css";
import { useDispatch, useSelector } from 'react-redux';
import { setcolor } from '../redux/colorSlice' 
import  { AnimatedTooltip } from "./animated-tooltip.tsx";
import surya from '../assets/Images/surya.jpg'
import sathish from '../assets/Images/sathish.jpg'
import parthi from '../assets/Images/parthi.jpg'
import vicky from '../assets/Images/vicky.jpg'

const getRandomColor = () => {
  
  const colors = [
  "#ff4d6d",
  "#ff6f00", 
  "#ffee32", 
  "#4df1c5",  
  "#00bbf9", 
  "#7b2ff7", 
  "#f72585", 
  "#06d6a0",
  "#ffadad",  
  "#ffd6a5", 
  "#fdffb6", 
  "#caffbf", 
  "#9bf6ff", 
  "#a0c4ff",  
  "#bdb2ff",
  "#000000ff",
   "#fed053f8", 
  "#4cfc66ff",  
  "#0081f9ff", 
  "#7b2ff7", 
  "#fc54a0ff", 
  "#73ffdaff",
  "#b05f5fff",  
  "#b18b5dff", 
  

  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const people = [
  {
    id: 1,
    name: "Surya",
    designation: "Founder & CEO",
    image :surya
  },
  {
    id: 2,
    name: "Sathish",
    designation: "Process Manager",
    image: sathish
  },
  {
    id: 3,
    name: "vignesh",
    designation: "Associate Manager",
    image: vicky
  },
  {
    id: 4,
    name: "Parthi",
    designation: "HR",
    image: parthi
  }
];

export default function BoxesBackground() {
 
  const rows = 12; 
  const cols = 30;
  const total = rows * cols;
  const color = useSelector(state=> state.color.color);
  console.log(color , "color");
  return (
    <div className="background-container">
      <div className="boxes-grid">
        {Array.from({ length: total }).map((_, idx) => (
          <HoverBox key={idx} className={`box-${idx}`} />
        ))}
      </div>
      <div className="centered-heading">
          <h1><span style={{ color: color , fontFamily : 'poppins'} }>THANKS TO</span><br></br>OUR AMAZING TEAM</h1>
          <p> Behind every successful project is a team of passionate, talented, and dedicated individuals.  
  Our team brings together years of industry expertise, innovative thinking, and hands-on experience,  
  working tirelessly to deliver real-world solutions that empower learners and create meaningful impact.  
  Together, we turn ideas into action and challenges into opportunities.
            </p>
           
      </div> 

      
          <div className="peoples-design">
                  <AnimatedTooltip items={people} />
            </div>
    
    </div>
  );
}

function HoverBox({className}) {
  const [color, setColor] = useState();
  const dispatch = useDispatch();
 
  return (
    <div
      className={`box ${className}`} 
      style={{ backgroundColor: color }}
      onMouseEnter={() =>{
           const Newcolor = getRandomColor();
           setColor(Newcolor);
           dispatch(setcolor(Newcolor));
      }
      }
      onMouseLeave={() => setColor("rgba(255,255,255,0.05)")}
    ></div>
    
   
  );
}
