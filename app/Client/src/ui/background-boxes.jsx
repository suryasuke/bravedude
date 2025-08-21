import React, { useState } from "react";
import "./background.css";
import { useDispatch, useSelector } from 'react-redux';
import { setcolor } from '../redux/colorSlice' 
import  { AnimatedTooltip } from "./animated-tooltip.tsx";

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
  "#ffc6ff" 
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const people = [
  {
    id: 1,
    name: "Surya",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
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
          <h1><span style={{ color: color , fontFamily : 'poppins'} }>Well Experienced</span><br></br>Our Trainers</h1>
          <p>We bring extensive industry knowledge and practical expertise, combining years of hands-on 
            experience with deep understanding of market trends, to deliver effective, real-world learning 
            that equips learners with the skills, confidence, and problem-solving abilities needed to excel in professional environments.
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
