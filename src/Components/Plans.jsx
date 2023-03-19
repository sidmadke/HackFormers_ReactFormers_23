import '../css/Plan.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Plans() {
    // const [temp, setTemp]=useState({});
    
    // const giveplan=async()=>{
    //     const token = await JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    //     const id=token._id
    //     return id;
    // }

    // useEffect(() => {
    //     const id="64161ecfa76d09110f6cdf39"
    //     // const id=giveplan();
    //     // console.log(id);
    //     axios.post(`http://localhost:2000/api/getplan`, { user: id })
    //         .then(res => {
    //             const data=res.data.plan.Workout_Plan[0]
    //             console.log(res.data.plan.Workout_Plan[0][0])
    //         }).catch(error => {
    //             console.log(error);
    //         })
    // }, [])
    return (
        <div className='PlanBg'>
        <h2 className='NavTitle'>Health Transformer</h2>
        <div className="Plans">
            <div className="workout-plan">
                <h2 className='PlanTitle'>Workout Plan</h2>
            </div>
            <div className="diet-plan">
                <h2 className='PlanTitle'>Diet Plan</h2>


            </div>
        </div>
        </div>
    )
}