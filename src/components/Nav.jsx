import { Link } from 'react-router-dom'
import './Nav.css'
const Nav = () => {
    return (
        <>
            <nav>
            
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <ul>
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                    <li><a href="/soporte">Coporte</a></li> */}
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/Soporte">Soporte</Link>
                    </li>
                </ul>

            </nav>

        </>
    )
}

export default Nav