
import { createContext, useState } from 'react';
import './App.css';
// import Moive from './Components/Homepage';
import Routing from './Components/Routing';
import Signup from './Components/Signup';
// import Moive from './Components/Homepage';
// import Moive from './Components/Homepage';


// import Signup from './Components/Signup';



export const logincontext=createContext();




function App() {
  const[login,setlogin]=useState(false)
  const setloginn=()=>{
    setlogin(!login)
  }
  return (
    <div className="App">
      
    
      
      
{/* <Signup/>     */}
{/* <Moive> */}
{/* <Signup/> */}
{/* <Homepag/> */}

{/* <Moive/> */}
<logincontext.Provider value={{Login:login,setLogin:setloginn}}>
<Routing></Routing>
</logincontext.Provider>

{/* <Signup/> */}

    </div>
  );
}

export default App;
