import React from 'react'
import './Colleges.css'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

function Colleges() {
  return (
    <div className='college-container'>
      <p className='p-class-fst-intern'>Workshops</p>
      <p className='p-class-scnd-intern'>Providing free workshops for colleges <span><WorkspacePremiumIcon className='workshop-icon'/></span><hr className='hr-contact'/></p>
    </div>
  )
}

export default Colleges
