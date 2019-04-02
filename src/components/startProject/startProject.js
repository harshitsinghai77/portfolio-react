import React from 'react';
import { Link } from 'react-router-dom';
import image from '../header/header.png'
import '../css/main.css';

const Project = () => {

    return(
        <div>
            <section className="section call-to-action is-primary has-text-centered">
                <div className="container is-narrow">
                    <div className="box">
                        <div className="columns level">
                            <div className="column level-item">
                                <h1 className="title">Start a project</h1>
                            </div>
                            <div className="column level-item">
                                <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
                            </div>
                            <div className="column level-item"><Link className="button is-primary is-outlined is-rounded is-medium" to="/project-collaboration">Let's do this</Link></div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="section is-primary is-small has-text-centered">
                    <div className="container is-narrow">
                        <div className="logo"><img src={image} alt="Harshit Singhai | Software Engineer, Programmer &amp; Data Scientist" height="48" /></div>
                        <div className="columns is-centered"> 
                            <div className="column is-one-third">
                            <h1 className="title is-size-4-touch">Living, learning, &amp; leveling up one day at a time.</h1>
                            </div>
                        </div>
                        <div className="social-icons">
                            <p className="field"><a className="button is-medium" href="https://twitter.com/farleymatters" target="_blank"><span className="icon is-small"><i className="fab fa-twitter fa-fw"></i></span></a><a className="button is-medium" href="https://dribbble.com/mattfarley" target="_blank"><span className="icon is-small"><i className="fab fa-github fa-fw"></i></span></a><a className="button is-medium" href="https://www.linkedin.com/in/matthew-farley-32526014/" target="_blank"><span className="icon is-small"><i className="fab fa-linkedin-in fa-fw"></i></span></a><a className="button is-medium" href="https://angel.co/mattfarley" target="_blank"><span className="icon is-small"><i className="fab fa-angellist fa-fw"></i></span></a><a className="button is-medium" href="https://www.producthunt.com/@farleymatters" target="_blank"><span className="icon is-small"><i className="fab fa-instagram fa-fw"></i></span></a><a className="button is-medium" href="/cdn-cgi/l/email-protection#6805091c1c28180d060c0d091e071a460b0705" target="_blank"><span className="icon is-small"><i className="far fa-envelope fa-fw"></i></span></a></p>
                        </div>
                        <div className="copyright">Handcrafted by me<span className="icon has-white-text" style={{verticalAlign:"middle"}}><i className="far fa-copyright"></i></span>harshitsinghai77</div>
                        </div>
            </footer>
        </div>
    )

}

export default Project;