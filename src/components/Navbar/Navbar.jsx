import { Link } from "react-router-dom";

// CSS
import './Navbar.css';

const Navbar = () => {
    return(
        <div>
            <nav className="navbar rainbow">
                <div className="logo">
                </div>

                <div className="menu">
                    <Link to='/'>Home</Link>
                    <Link to='/team'>Times</Link>
                    <Link to='/player'>Jogadores</Link>
                    { /* <Link to='/about'>Sobre</Link> */ }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;