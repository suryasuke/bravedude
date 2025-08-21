import React, {useState} from 'react'
import './VerifyCertificate.css'
import { checkCertificate } from '../../API/addStudent';

function VerifyCertificate() {

  const [details , setDetails] = useState({
    name :'',
    DOB : '',
    email:'',
    CI:''
  })
  const [isValid, setIsValid] = useState(null);

  function handleChange(e){
    const {name, value} = e.target;
    setDetails((prev)=>{
      return {
        ...prev,
        [name]: value
      }
    })
  }

async function handleSubmit(e) {
  e.preventDefault();

  try {
    const reply = await checkCertificate(details);
    const state = reply.data.message.state;


    if (state === 'success') {
      setIsValid('success');
    } else {
      setIsValid('error');
    }

  
    setTimeout(() => {
      setIsValid(null);
      setDetails({
        name: '',
        DOB: '',
        email: '',
        CI: ''
      });
    }, 5000);

  } catch (err) {
    console.error("API error:", err);
    setIsValid('error');
  }
}


  return (
    <div className='verify-certificate-container'>
      <form onSubmit={handleSubmit} className='verify-certificate-form'>
        <p className='verify-heading'>
          <span className='g-red'>V</span>
          <span className='g-yellow'>e</span>
          <span className='g-blue'>r</span>
          <span className='g-green'>i</span>
          <span className='g-red'>f</span>
          <span className='g-yellow'>y</span> your certificate
        </p>
        <input className='verify-certificate-input' type='text' name='name' value={details.name} onChange={handleChange} placeholder='Name' required />
        <input className='verify-certificate-input' type='date'  name='DOB' value={details.DOB} onChange={handleChange} required  max={new Date().toISOString().split("T")[0]} />
        <input className='verify-certificate-input' type='email' name='email' value={details.email} onChange={handleChange} placeholder='Email' required />
     <input
  className={`verify-certificate-input ${isValid === null ? '' : isValid === 'success' ? 'valid' : isValid === 'error' ? 'invalid' : ''}`}
  type="text"
  name="CI"
  value={details.CI}
  onChange={handleChange}
  placeholder="Certificate ID"
  required
  minLength={6}
  maxLength={12}
  pattern="[A-Za-z0-9]+"
  title="Certificate ID must be 6-12 characters and alphanumeric"
/>

        <button type='submit' className='verify-certificate-button'>Verify</button>
      </form>
    </div>
  );
}

export default VerifyCertificate;
