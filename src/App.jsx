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

function App() {
  return (
    <>
      <div className="App">
        <Nav />
      </div>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Error />}></Route>

      </Routes>
    </>

  )
}

export default App;