import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './Components/login'
import Home from './Components/Home'
import Error from './Components/Error'

function App() {
  return (
    
     <>

        <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<Error/>}></Route>
          
        </Routes>
        </>
   
  )
}

export default App;