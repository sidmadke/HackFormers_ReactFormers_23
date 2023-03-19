// import React from 'react'
// import { useState,useEffect } from 'react';
// import '../css/Details.css'

// function Details() {




//   return (
//     <div className='details'>
//     <div className='details_cont'>
//     <h1 className='DetailsTitle'>DETAILS</h1>
//         <form about='' onSubmit={handleSubmit} className="DetailsPage">
//             <div className='details_info'> 
//                 <label className='label'>AGE</label><br/>
//                 <input type='text'autoComplete='off' name='age' id='name' placeholder='e.g.25 years' value={userDetails.age} onChange={handleInput}></input>
//             </div>
//             <div className='details_info'>
//                 <label className='label'>WEIGHT</label><br/>
//                 <input type='number'autoComplete='off' name='weight' id='name' placeholder='e.g.10kg' value={userDetails.weight} onChange={handleInput}></input>
//             </div>
//             <div className='details_info'>
//                 <label className='label'>HEIGHT</label><br/>
//                 <input type='number' autoComplete='off' name='height' id='name' placeholder='e.g.5.2 inches' value={userDetails.height} onChange={handleInput}></input>
//             </div>
//             <div className='details_info'>
//                 <label className='label'>TARGET</label><br/>
//                 <input type='number'autoComplete='off' name='target' id='name' placeholder='e.g.10kg' value={userDetails.target} onChange={handleInput}></input>
//             </div>
//             <div className='details_info'>
//                 <label className='label'>TIME YOU CAN GIVE FOR WORKOUT</label><br/>
//                 <input type='number' autoComplete='off' name='time' id='name' placeholder='time' value={userDetails.time} onChange={handleInput}></input>
//             </div>
//             <div className='details_info'>
//                 <div className='radio'>
//                 <input type='radio' autoComplete='off' name='time' id='name' placeholder='time' value={userDetails.time} onChange={handleInput}></input><label className='radio'>LOOSE WEIGHT</label></div>
//                 <div className='radio'><input type='radio' autoComplete='off' name='time' id='name' placeholder='time' value={userDetails.time} onChange={handleInput}></input><label className='radio'>GAIN WEIGHT</label><br/>
//                 </div>
//             </div>

//             <div>

//                 <button type='submit'>Get Plans</button>
//             </div>
//         </form>
//     </div>
//     </div>
//   )
// }

// export default Details

import React, { useState } from 'react';
import '../css/Details.css';
import axios from 'axios';

function Details() {
  const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
  console.log(token._id);

  const [selectedOption, setSelectedOption] = useState('option1');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [target, setTarget] = useState('');
  const [time, setTime] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const handleTargetChange = (event) => {
    setTarget(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ user: token._id, age, height, weight,gainloose:'gain', target ,time})
    axios.post('http://localhost:2000/api/adddetails', { user: token._id, age, height, weight,gainloose:'gain', target,time}).then(data => {
      console.log(data)
    })
  };

  return (
    <div className='details'>
      <div className='details_cont'>
        <h1 className='DetailsTitle'>DETAILS</h1>
        <form about='' onSubmit={handleSubmit} className='DetailsPage'>
          <div className='details_info'>
            <label className='label'>AGE</label>
            <br />
            <input
              type='text'
              autoComplete='off'
              name='age'
              id='name'
              placeholder='e.g.25 years'
              value={age} onChange={handleAgeChange}
            ></input>
          </div>
          <div className='details_info'>
            <label className='label'>WEIGHT</label>
            <br />
            <input
              type='number'
              autoComplete='off'
              name='weight'
              id='name'
              placeholder='e.g.10kg'
              value={weight} onChange={handleWeightChange}
            ></input>
          </div>
          <div className='details_info'>
            <label className='label'>HEIGHT</label>
            <br />
            <input
              type='number'
              autoComplete='off'
              name='height'
              id='name'
              placeholder='e.g.5.2 inches'
              value={height} onChange={handleHeightChange}
            ></input>
          </div>
          <div className='details_info'>
            <label className='label'>TARGET</label>
            <br />
            <input
              type='number'
              autoComplete='off'
              name='target'
              id='name'
              placeholder="e.g.10kg"
              value={target} onChange={handleTargetChange}></input>
          </div>

          <div className='details_info'>
            <label className='label'>Time</label>
            <br />
            <input
              type='text'
              autoComplete='off'
              name='target'
              id='name'
              placeholder="e.g.10kg"
              value={time} onChange={handleTimeChange}></input>
          </div>

          <div className='details_info'>
            {/* <div className='radio'>
              <input type='radio' autoComplete='off' name='time' id='name' placeholder='time'></input>
              <label className='radio'>LOOSE WEIGHT</label>
              </div>
            <div className='radio'>
              <input type='radio' autoComplete='off' name='time' id='name' placeholder='time' >
                </input><label className='radio'>GAIN WEIGHT</label><br />
            </div> */}
            <div>
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
              />
              Gain Weight
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
              />
              Loose Weight
            </label>
          </div>
          </div>

          <div>

            <button type='submit'>Get Plans</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Details;