import './styles.css'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to={"/"}><h1>Portfolio</h1></Link>
            <ul>
                <li>
                    <Link to={
                        "/accordion"
                    }>Accordion</Link>
                </li>
                <li>
                    <Link to={
                        "/rcg"
                    }>Random color generator</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;