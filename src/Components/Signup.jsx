import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react'
import '../css/Signup.css'
// import {BsFacebook,BsLinkedin,BsGoogle} from 'react-icons/bs'


function Signup() {
    const [firstName,setFname]=useState('')
    const [lastName,setLname]=useState('')
    // const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const navigate = useNavigate()
    console.log(firstName,lastName,email,password)

    async function registerUser(e){
        
        e.preventDefault();
        const res= await fetch('http://localhost:2000/api/signup',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            })
        })
        const data = await res.json()
        if(res.status === 200) { 
            alert("Registered Successfully 💫")
        }
        console.log(data);
    }
    return (
        <div className='mai'>
        <form className='log'>
            <div className='lhead'>Sign-up</div>
            <div className='block'>
                <div className='label2'>Firstname</div>
                <input className='input inSign' type='text' value={firstName} onChange={(e)=>setFname(e.target.value)} ></input>
            </div>
            <div className='block'>
                <div className='label2'>Lastname</div>
                <input className='input inSign' type='text' value={lastName} onChange={(e)=>setLname(e.target.value)} ></input>
            </div>
            <div className='block'>
                <div className='label2'>E-Mail</div>
                <input className='input inSign' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
            </div>
            {/* <div className='block'>
                <div className='label2'>Username</div>
                <input className='input' type='text' value={name} onChange={(e)=>setName(e.target.value)}  ></input>
            </div> */}
            <div className='block'>
                <div className='label2'>Password</div>
                <input className='input inSign' type='password'  value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
            </div>
            <button type='submit' className='signBtn' onClick={registerUser}>Sign-UP</button>
            <div className='or'>OR</div>
            <div className='or'>Continue With</div><br/>
            {/* <div className='sl'>
                <BsGoogle size={30} className='g'/>
                <BsFacebook size={30} className='f'/>
                <BsLinkedin size={30} className='l'/>
            </div> */}
            <div className='need'>
                Already a user? <Link className='link' to='/login'>Log-in</Link>
            </div>
        </form>
        </div>
    )
}

export default Signup;

