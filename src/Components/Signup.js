
// import React from 'react';
// import  { useState } from 'react';
// import Login from './Login';


// const Signup = () => {
//     const [name,setName]=useState("");
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const [phonenumber,setPhoneNumber]=useState("");
//     const [flag, setFlag] = useState(false);
//     const[login,setLogin]=useState(true);

//  function handlesubmit(e){
//     e.preventDefault();
//     if(!name||!email||!password||!phonenumber){
//         setFlag(true);
//     }else{
//         setFlag(false);
//         localStorage.setItem("Email",JSON.stringify(email));
//         localStorage.setItem("Password",JSON.stringify(password));
//         console.log("Saved In Local Storage");
//         setLogin(!login);
//     }
//  }

//  function handleclick(){
//     setLogin(!login);
//  }

//   return (
//     <>
//     {login?(
//     <>
//     <div style={{ textAlign: 'center', marginTop: '50px', border: '2px solid #ddd', padding: '20px', borderRadius: '10px' }}>
//       <h1>Signup</h1>
//     <form onSubmit={handlesubmit} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
//     <label for="name">Name:</label>
//     <input type="text" id="name" name="name" placeholder="Enter your name" required onChange={(event)=>setName(event.target.value)}/> 
//     <label for="email">Email:</label>
//     <input type="email" id="email" name="email" placeholder="Enter Email" required onChange={(event)=>setEmail(event.target.value)}/>
//     <label for="password">Password:</label>
//     <input type="password" id="password" name="password" placeholder="Enter Password" required onChange={(event)=>setPassword(event.target.value)}/>
//     <label for="phone">Phone Number:</label>
//     <input type="Phone" id="phone" name="phone" placeholder="Enter Phone Number" required onChange={(event)=>setPhoneNumber(event.target.value)}/>
//     <label for="department">Profession:</label>
//     <select id="Profession" name="department" required>
//       <option value="" disabled selected>Select your Profession</option>
//       <option value="Student">Student</option>
//       <option value="Employee">Employee</option>
//       <option value="Doctor">Doctor</option>
//     </select><br></br>
//     <button type='submit'style={{backgroundColor:'green',}}>Submit</button>

//     <p onClick={handleclick}>Already have account{" "} login?</p>
//    {flag &&(
//     <alert color="primary" variant="danger">
//         please fill every filed
        
//     </alert>
  
//    )}

//   </form>
//   </div>
//   </>
//   ):(
//   <Login/>
//   )}
//     </>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import Login from './Login';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password || !phonenumber) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      console.log("Saved In Local Storage");
      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <div style={styles.container}>
      {login ? (
        <div>
          <h1 style={styles.heading}>Signup</h1>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label htmlFor="name" style={styles.label}>Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required style={styles.input} onChange={(event) => setName(event.target.value)} />
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter Email" required style={styles.input} onChange={(event) => setEmail(event.target.value)} />
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter Password" required style={styles.input} onChange={(event) => setPassword(event.target.value)} />
            <label htmlFor="phone" style={styles.label}>Phone Number:</label>
            <input type="Phone" id="phone" name="phone" placeholder="Enter Phone Number" required style={styles.input} onChange={(event) => setPhoneNumber(event.target.value)} />
            <label htmlFor="department" style={styles.label}>Profession:</label>
            <select id="Profession" name="department" required style={styles.input}>
              <option value="" disabled selected>Select your Profession</option>
              <option value="Student">Student</option>
              <option value="Employee">Employee</option>
              <option value="Doctor">Doctor</option>
            </select>
            <button type='submit' style={styles.submitButton}>Submit</button>
            <p style={styles.loginLink} onClick={handleClick}>Already have an account? Login</p>
            {flag && (
              <div style={styles.errorText}>
                Please fill every field
              </div>
            )}
          </form>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    border: '2px solid #ddd',
    padding: '20px',
    borderRadius: '10px',
    width: '300px',
    margin: 'auto',
    transition: 'box-shadow 0.3s ease', // Smooth transition
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Box shadow for elevation effect
  },
  heading: {
    fontSize: '1.5em',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    margin: '5px 0',
    fontSize: '1em',
  },
  input: {
    padding: '8px',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ccc',
    transition: 'border-color 0.3s ease', // Smooth border color transition
  },
  submitButton: {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    width: '100%',
    fontSize: '1em',
    transition: 'background-color 0.3s ease', // Smooth background color transition
  },
  submitButtonHover: {
    backgroundColor: '#4CAF50', // Updated color on hover
  },
  loginLink: {
    marginTop: '10px',
    cursor: 'pointer',
    color: 'blue',
    textDecoration: 'underline',
    fontSize: '0.9em',
  },
  errorText: {
    marginTop: '10px',
    color: 'red',
    fontSize: '0.9em',
    animation: 'shake 0.5s', // Shake animation for error message
  },
  // Keyframe animation for error message
  '@keyframes shake': {
    '0%, 100%': { transform: 'translateX(0)' },
    '20%, 60%': { transform: 'translateX(-10px)' },
    '40%, 80%': { transform: 'translateX(10px)' },
  },
};

export default Signup;
