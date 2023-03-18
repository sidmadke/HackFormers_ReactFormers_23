<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Nav from './Nav'
=======
import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './Components/login'
import Home from './Components/Home'
import Error from './Components/Error'
>>>>>>> 50d5fde8a49ef653d49650af55470c2893518679

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Nav/>
    </div>
=======
    
     <>

        <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<Error/>}></Route>
          
        </Routes>
        </>
   
>>>>>>> 50d5fde8a49ef653d49650af55470c2893518679
  )
}

export default App;