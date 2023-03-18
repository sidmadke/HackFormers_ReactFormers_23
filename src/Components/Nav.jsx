import '../css/nav.css'
import { Link } from 'react-router-dom'
export default function Nav() {

    return (
        <>
            <nav >
                <div className="Title "><div className="fade-in-right"><h1>Health <br/> Transformers</h1> 
                <p>Get Customised Workout and Diet Plans and Transform Your Health with Us</p></div></div>
                <Link to="/login"> <button className='fbtn slide-top'>Get Transform --›</button></Link>
                
            </nav>
        </>
    )
}