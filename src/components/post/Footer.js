import React from 'react'
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer className="footer ">
            <div className="container">
                <nav className="pull-left">
                    <ul>
                        <li>
                            <Link to="/contact-form">
                                Contact Me
                            </Link>
                        </li>
                        <li>
                            <Link to="/project-hire">
                                Hire Me
                            </Link>
                        </li>
                        <li>
                            <Link to="/project-collaboration">
                                Collaboration
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="copyright pull-right">
                    &copy;
                    made with <i className="material-icons">favorite</i> by <a href="https://www.creative-tim.com">Harshit Singhai</a>.
                </div>
            </div>
        </footer>
    )
}

export default Footer;