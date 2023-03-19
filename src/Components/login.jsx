import { Link , useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react'
import '../css/login.css'
// import {BsFacebook,BsLinkedin,BsGoogle} from 'react-icons/bs'


function Login() {
    //login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    console.log(email, password);
    async function userLogin(e){
        e.preventDefault();
        try {
            const result = await fetch('http://localhost:2000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    email, password
                })

            }).then((res) => res.json())
            // console.log(result.token)
            localStorage.setItem('token', result.token)
            
            console.log(result.status)
            if(result.status === 200) { 
                alert("Login Successfully 💫")
                navigate('/')
            }
            else {
                alert("Invalid Email or Password 🥺")
            }

        }
        catch (err) {
            console.log(err)
        }
        window.location.reload();
    }
    return (
        <div className='mai'>
        <form className='log1'>
            <div className='lhead'>Log-in</div>
            <div className='block'>
                <div className='label2'>Email</div>
                <input className='input inSign' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className='block'>
                <div className='label2'>Password</div>
                <input className='input inSign' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div className='cb'>
                <input className='check2' type='2box'></input>
                <div className='p'>Remember Me?</div>
            </div>
            <Link to='/'>
                <button onClick={userLogin} className="buttonLog">LOGIN</button>
            </Link>
            <div className='f'>Forgot Password?</div>
            <div className='or'>OR</div>
            <div className='or'>Continue With</div><br/>
            {/* <div className='sl'>
                <BsGoogle size={30} className='g'/>
                <BsFacebook size={30} className='f'/>
                <BsLinkedin size={30} className='l'/>
            </div> */}
            <div className='need'>
                Need an account? <Link className='link' to='/Signup'>Sign-Up</Link>
                <div></div>
            </div>
        </form>
        </div>
    )
}

export default Login;

