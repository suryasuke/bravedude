import React from 'react'
import './Why_Us.css'
import why from '../../assets/whyus'

function Why_Us() {
  return (
    <div className='why-cnt'>
        <div>
            <p className='p-class-fst-why' >WHY US</p>
            <p className='p-class-scnd-why'>Why We're the Best Choice for <br></br>Your Learning</p>
        </div>
        <div className='second-why-cont'>
            {
                why.map((value)=>{
                    return (
                         <div className='whys-cnt-act' style={{backgroundColor : value.color  }}>
                     <h2>{value.Title}</h2>
                     <p>{value.des}</p>
                    </div>
                    )
                   
                })

            }
        </div>
      
    </div>
  )
}

export default Why_Us
