import React from 'react';
import image from './header.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div> 
            <nav className="navbar is-transparent">
                <div className="container">
                    <div className="navbar-brand"><Link className="navbar-item" to = "/"><img src={image} alt="Harshit Singhai | Software Engineer, Programmer &amp; Data Scientist" /> </Link></div>
                    <div className="navbar-menu" id="navMenu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                        <p className="control"><Link className="button is-primary is-outlined is-rounded" to = "/contact-form"><span>Say Hello</span></Link></p>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;