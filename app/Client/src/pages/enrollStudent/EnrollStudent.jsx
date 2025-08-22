import React, { useEffect, useState } from 'react';
import './EnrollStudent.css';
import TextField from '@mui/material/TextField';
import { useLocation , useNavigate} from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import { Outlet } from "react-router-dom";


function EnrollStudent({ children }) {
  const [Auth, SetAuth] = useState({
    username: '',
    password: ''
  });
  
  const [error, setError] = useState(false);
  const { isAuthenticated , login} = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetAuth((prev) => ({
      ...prev,
      [name]: value
    }));
  };
const location = useLocation();

  const credentials = {
    username: 'admin12',
    password: 'admin@123brave'
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Auth.username === credentials.username && Auth.password === credentials.password) {
      login()
      setError(false);
      SetAuth({
        username: '',
        password: ''
      });
    } else {
      alert('Invalid username or password');
      setError(true);
    }
  };

if (isAuthenticated) {
  return <Outlet />;
}



  return (
    <div className="EnrollStudentAuth-container">
      <div className='fs-Auth-header'>
         <p>{children ? children.type?.name + " >" : ""}</p>

      </div>
   
      <div className="feedback-box">
        <h2>Admin login</h2>
        <form onSubmit={handleSubmit} className="feedback-form-elephant">
      <TextField
  label="Username"
  type="text"
  name="username"
  value={Auth.username}
  className='textbox-feedback'
  placeholder="Enter your name"
  onChange={handleChange}
  error={error}
  helperText={error ? "Invalid username or password" : ""}
  fullWidth
  margin="normal"
  variant="outlined"
  InputProps={{
    sx: {
      borderRadius: 0,
      height: "45px",
      "& .MuiOutlinedInput-input": {
        fontWeight: 500,   // input text weight
        fontSize: "16px",
      },
    },
  }}
  InputLabelProps={{
    sx: {
      fontWeight: 500,    // label weight
      fontSize: "14px",
      color: "black",
    },
  }}
  FormHelperTextProps={{
    sx: {
      fontWeight: 500,    // error text weight
      color: "red",
    },
  }}
  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  }}
/>

<TextField
  label="Password"
  type="password"
  name="password"
  className='textbox-feedback'
  value={Auth.password}
  onChange={handleChange}
  error={error}
  helperText={error ? "Invalid username or password" : ""}
  fullWidth
  margin="normal"
  variant="outlined"
  InputProps={{
    sx: {
      borderRadius: 0,
      height: "45px",
      fontWeight: 500, // text inside input
    },
  }}
  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      fontSize: "16px",
      fontWeight: 500,
      padding: "10px",
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    "& .MuiInputLabel-root": {
      fontSize: "14px",
      color: "black",
      fontWeight: 500, // label weight
    },
    "& .MuiFormHelperText-root": {
      color: "red",
      fontWeight: 500, // error text weight
    },
  }}
/>



          <button className="btn-feed-sbmt" type="submit">
            Check
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnrollStudent;
