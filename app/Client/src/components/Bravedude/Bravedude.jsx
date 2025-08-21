import React, { useState } from "react";
import "./Bravedude.css";
import Marquee from "react-fast-marquee";

function Bravedude() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const letters = ["B", "R", "A", "V", "E", "D", "U", "D", "E"];
  

  return (
    <Marquee   direction="left" speed={70}>
      
         <div className="Bravedude-font">
      {letters.map((value, index) => (
        <p
          key={index}
        
          onMouseOver={() => setHoverIndex(index)}   
          onMouseOut={() => setHoverIndex(null)}     
          style={{
            color: hoverIndex === index ? "#0076b2ff" : "#d4d4d4e2",
            cursor: "pointer",
       
          }}
        >
          {value}
        </p>
      ))}
    </div>
    </Marquee>
   
  );
}

export default Bravedude;
