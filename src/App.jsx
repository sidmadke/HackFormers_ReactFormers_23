import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Nav from './Components/Nav'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/login'
import Home from './Components/Home'
import Error from './Components/Error'
import Details from './Components/Details'
<<<<<<< HEAD
import Plans from './Components/Plans'
=======
import Plan from './Components/Plan'
import Signup from './Components/Signup'
>>>>>>> 924ee4406bf5d36d892edf276ec80a62ab05648a

function App() {
  return (
    <>
      <div className="App">
      <Routes>
        <Route path='/' element={<Nav />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/Details' element={<Details />}></Route>
        <Route path='/Plans' element={<Plans />}></Route>
        <Route path='*' element={<Error />}></Route>
        <Route path='/plans' element={<Plan/>}></Route>
      </Routes>
      </div>
    </>

  )
}

export default App;