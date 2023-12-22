




// import React, { useContext, useState } from 'react';
// import Homepage from './Homepage';
// import { logincontext } from '../App';

// function Login() {
//   const [emaillog, setEmaillog] = useState("");
//   const [passwordlog, setPasswordlog] = useState("");
//   const login = useContext(logincontext);

//   function handleLogin(e) {
//     e.preventDefault();
//     let email = localStorage.getItem("Email").replace(/"/g, "");
//     let password = localStorage.getItem("Password").replace(/"/g, "");

//     if (emaillog === email && passwordlog === password) {
//       login.setLogin();
//     } else {
//       alert("Enter the right details");
//     }
//   }

//   return (
//     <div style={styles.container}>
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={handleLogin} style={styles.form}>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" placeholder="Enter Email" required onChange={(event) => setEmaillog(event.target.value)} />
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" name="password" placeholder="Enter Password" required onChange={(event) => setPasswordlog(event.target.value)} /><br></br>
//           <button style={styles.button}>Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // height: '100vh', // Center vertically
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     border: '2px solid #ddd',
//     padding: '20px',
//     borderRadius: '10px',
//   },
//   button: {
//     backgroundColor: "pink",
//     marginTop: '10px',
//   },
// };

// export default Login;




import React, { useContext, useState } from 'react';
import Homepage from './Homepage';
import { logincontext } from '../App';

function Login() {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const login = useContext(logincontext);

  function handleLogin(e) {
    e.preventDefault();
    let email = localStorage.getItem("Email").replace(/"/g, "");
    let password = localStorage.getItem("Password").replace(/"/g, "");

    if (emaillog === email && passwordlog === password) {
      login.setLogin();
    } else {
      alert("Enter the right details");
    }
  }

  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.title}>Login</h1>
        <form onSubmit={handleLogin} style={styles.form}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter Email" required onChange={(event) => setEmaillog(event.target.value)} />
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter Password" required onChange={(event) => setPasswordlog(event.target.value)} /><br></br>
          <button style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh', // Center vertically
    backgroundColor: '#f0f0f0', // Add background color
  },
  title: {
    color: '#333', // Add text color
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid #ddd',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff', // Add background color
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add box shadow
  },
  label: {
    marginBottom: '5px', // Add margin bottom to labels
    color: '#555', // Add label text color
  },
  button: {
    backgroundColor: "#ff69b4", // Pink color
    marginTop: '10px',
    color: '#fff', // Button text color
    padding: '10px', // Add padding
    cursor: 'pointer', // Add cursor pointer
  },
};

export default Login;




