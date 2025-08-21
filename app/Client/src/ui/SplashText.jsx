import React from 'react'
import splash from '../assets/Images/splash.png'
import './SplashText.css'

function SplashText({text, top , left , color , width }) {

  return (
    
        <section className='titukos' style={{width : width ? width : `${text.length*20}px`}}>
                      <img style={{top : `${top&&top}%` , left : `${left&&left}%`}} src={splash} alt=''/>
                      <section className='titukostext' style={{zIndex : '2'}}>
                      <p style={{color :color}} >{text}</p>
                      </section>
                </section>

  )
}

export default SplashText
