import { Link } from 'react-router-dom';
import "./header.css"

export function Header() {
    return(
        <div className="header">
            <h1>
                <Link to="/">Flash Cards</Link>
            </h1>
            <nav className='mainMenu'>
                <ul>
                    <li>
                        <Link className='mainMenuLink' to='admin'>Create Set</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}