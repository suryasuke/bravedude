import React from 'react'
import './Community.css'
import {avatars} from '../../assets/avatars'
function Community() {
  return (
    <div className='community-cnt'>
        <p className='p-class-fst-why'>COMMUNITY</p>
        <p className='p-class-scnd-com' >Join a global movement.<hr className="hr-contact"/></p>
        <p className='p-class-fst-com'>Our vibrant community produces content, teaches courses, and leads events all over</p>
        <div className='avatars-cnt'>
           {
            avatars.map((avatar , index)=>{
                return(
                     <img src={avatar.img} alt= {`avatar${index}`}/>
                )
            })
            
           }
        </div>
      
    </div>
  )
}

export default Community
