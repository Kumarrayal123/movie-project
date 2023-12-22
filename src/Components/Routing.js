 import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Movie from './Homepage'
import Shows from './shows'
import More from './More'
import Homepage from './Homepage'
import Login from './Login'
import Signup from './Signup'
import { logincontext } from '../App'

    function Routing() {
      const logincontext1=useContext(logincontext)
      return (
        <BrowserRouter>
        {
          logincontext1.Login?
          <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/show' element={<Shows/>}></Route>
            <Route path='/more'element={<More/>}></Route>
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Signup/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          
        </Routes>
        }


        </BrowserRouter>
      )
    }
    
    export default Routing