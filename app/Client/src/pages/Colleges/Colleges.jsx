import React, { useState } from 'react'
import './Colleges.css'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import workshop from '../../assets/workshop'
import CancelIcon from '@mui/icons-material/Cancel';
import { submitData } from '../../API/Workshop'
import { points_training ,training,mentors} from '../../assets/training'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Colleges() {

  const [form , setForm] = useState(false);
  const [details, setDetails] = useState({
    name : '',
    email :'',
    F_name:'',
    contact:''
  })

  function handleClick(e){
   e.preventDefault();
   console.log("clicked the form" , details)
   const result = submitData(details);
   console.log(result);
   setForm();
   setDetails({
    name :'',
    email :'',
    contact :'',
    F_name :''
   })
  }

  const handlechange = (e)=>{
   const {name,value} = e.target;
   setDetails((prev)=>{
  return {
    ...prev , [name] :value
  }
   })

  }
  return (

     
      <div className={`college-container ${form ? 'container-active' : ''}`}>
        {
          form && <div className='form-overlay-workshop'></div>
        }

       {
     form &&
     
          <form onSubmit={handleClick} className={`Register-workshop ${form ? 'active-form' :''}`}>
           <p className='head-workshop'>Fill the form<span onClick={()=>{
            setForm((prev)=>{
              return !prev
            })
           }}><CancelIcon/></span></p>
           <input type='text' placeholder='College Name' value={details.name} onChange={handlechange} name='name'/>
           <input type='text' placeholder='Faculty name'  value={details.F_name} onChange={handlechange} name='F_name'/>
           <input type='text' placeholder='college mail'  value={details.email} onChange={handlechange} name='email'/>
           <input type='text' placeholder='contact Number'   value={details.contact} onChange={handlechange} name='contact'/>
           <button className='register-button' type='submit'>Submit</button>
          </form>
     
     } 
  
      <div className='first-workshop'>
      <p className='p-class-fst-intern'>Workshops</p>
      <p className='p-class-scnd-intern'>Providing free workshops for colleges <span><WorkspacePremiumIcon className='workshop-icon'/></span><hr className='hr-contact'/></p>
      <div className='container-of-workshop'>
    {
      workshop.map((workshop,index)=>{
        return (
          <div className='workshop-card'>
            <span>{index+1}</span><p>{' '}{workshop}</p>
          </div>
        )
      })

    }
      </div>  
     
      <button  onClick={()=> setForm((prev)=>{
        return !prev
      })} className='rgstr-for-workshop'>Register for your college</button>
      </div>

    
     <div className='training-fr-college'>
        <p className='p-class-fst-intern'>Trainings</p>
        <p className='p-class-scnd-intern'>Providing low cost Placement Tranining for colleges<hr className='hr-contact'/></p>
        <div  className='training-topics'>
         {
      training.map((training)=>{
        return (
          <div className='training-card'>
           <p>{' '}{training}</p>
          </div>
        )
      })
    }
        </div>
        <div className='training-points-container'>
          { points_training.map((points)=>{
            return(
               <div className='training-points-card'>
             <p><CheckCircleIcon style={{color:'green'}}/>{' '}{' '}{points}</p>
            </div>
            )
          })
          }
        </div>
     </div>

     <div className='mentors'>
      <p className='p-class-fst-intern'>Mentors</p>
      <p className='p-class-scnd-intern'>Our Mentors<hr className='hr-contact'/></p>
      <div className='mentor-of-college'>
    {
      mentors.map((mentor)=>{
        return (
          <div className='mentors-card'>
            <img src={mentor.img}/>
            <p><PlayArrowIcon/></p>
            <div className='NandW'>
              <p className='mentor-name'>{' '}{mentor.name}</p>
              <p className='mentor-work'>{mentor.work}</p>
            </div>
          </div>
        )
      })
    }
      </div>  
      </div>
  </div>
)
}
export default Colleges
