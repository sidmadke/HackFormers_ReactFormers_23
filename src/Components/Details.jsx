import React from 'react'
import { useState } from 'react';
import '../css/Details.css'

function Details() {
    const [userDetails,setUserDetails]=useState({
        age:"",
        weight:"",
        height:"",
        target:"",
        time:""
    });

   const [records,setRecords]=useState([]);
    

   
    const handleInput=(e)=>{
       const name=e.target.name
       const value=e.target.value
       console.log(value)

       setUserDetails({...userDetails, [name] : value })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const newRecord={...userDetails, id: new Date().getTime.toString()}
        console.log(records)
        
        setRecords([...records , newRecord])
        console.log(records)
    }

  return (
    <div className='details'>
    <div className='details_cont'>
    <h1 className='DetailsTitle'>DETAILS</h1>
        <form about='' onSubmit={handleSubmit} className="DetailsPage">
            <div className='details_info'> 
                <label className='label'>AGE</label><br/>
                <input type='text'autoComplete='off' name='age' id='name' placeholder='e.g.25 years' value={userDetails.age} onChange={handleInput}></input>
            </div>
            <div className='details_info'>
                <label className='label'>WEIGHT</label><br/>
                <input type='number'autoComplete='off' name='weight' id='name' placeholder='e.g.10kg' value={userDetails.weight} onChange={handleInput}></input>
            </div>
            <div className='details_info'>
                <label className='label'>HEIGHT</label><br/>
                <input type='number' autoComplete='off' name='height' id='name' placeholder='e.g.5.2 inches' value={userDetails.height} onChange={handleInput}></input>
            </div>
            <div className='details_info'>
                <label className='label'>TARGET</label><br/>
                <input type='number'autoComplete='off' name='target' id='name' placeholder='e.g.10kg' value={userDetails.target} onChange={handleInput}></input>
            </div>
            <div className='details_info'>
                <label className='label'>TIME YOU CAN GIVE FOR WORKOUT</label><br/>
                <input type='number' autoComplete='off' name='time' id='name' placeholder='time' value={userDetails.time} onChange={handleInput}></input>
            </div>
            <div className='details_info'>
                <div className='radio'>
                <input type='radio' autoComplete='off' name='time' id='name' placeholder='time' value={userDetails.time} onChange={handleInput}></input><label className='radio'>LOOSE WEIGHT</label></div>
                <div className='radio'><input type='radio' autoComplete='off' name='time' id='name' placeholder='time' value={userDetails.time} onChange={handleInput}></input><label className='radio'>GAIN WEIGHT</label><br/>
                </div>
            </div>

            <div>
                
                <button type='submit'>Get Plans</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Details