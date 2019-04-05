import React from 'react';
import Card from './workCard';
import '../css/main.css';

const Work = () => {
    return (
        <section id = "myWork" className="section projects is-medium is-white has-text-centered">
            <div className="container is-narrow">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Work</h1>
                <h2 className="subtitle is-size-5-desktop">Here are a few of my software projects. Want to see more? <a target = "_blank" href="https://github.com/harshitsinghai77?tab=repositories">Click Here</a>.</h2>
                <div className="project-grid">  
                    <div className="columns is-multiline is-mobile">
                        <Card />
                    </div>
                </div>
            
                <div className="columns is-centered">
                    <div className="column"><a className="button is-primary is-outlined is-rounded is-medium" target = "_blank" href="https://github.com/harshitsinghai77"><span className="icon"><i className="fab fa-github"></i></span><span>See more on Github</span></a></div>
                </div>
            </div>
        </section>  
    )
}

export default Work;