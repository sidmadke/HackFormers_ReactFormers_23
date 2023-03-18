import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './Components/login'
import Home from './Components/Home'
import Error from './Components/Error'
import Details from './Components/Details'

function App() {
  return (
    
     <>

        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<Error/>}></Route>
          <Route path='/details' element={<Details></Details>}></Route>
          
        </Routes>
        </>
   
  )
}

export default App;