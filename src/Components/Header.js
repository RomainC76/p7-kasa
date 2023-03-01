import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../Images/LOGO.svg'

import './header.css'

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <nav>
                    <a href="/home">
                        <img src={Logo} className="App-logo" alt="logo"></img>
                    </a>
                    <ul>
                        <li><Link to="/home">Accueil</Link></li>
                        <li><Link to="/apropos">A propos</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;