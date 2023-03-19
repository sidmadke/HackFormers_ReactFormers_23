import { Link } from 'react-router-dom'
import '../css/nav.css'
export default function Nav() {

    return (
        <>
            <nav >
                <div className="Title "><div className="fade-in-right"><h1 className='NavTitle'>Health <br/> Transformers</h1> 
                <p>Get Customised Workout and Diet Plans and Transform Your Health with Us</p></div></div>
                <Link to="/Details"> <button className='fbtn slide-top'>Get Transform --›</button></Link>
                
            </nav>
        </>
    )
}