import React from 'react';
import Card from './workCard';

const Work = () => {
    return (
        <section className="section projects is-medium is-white has-text-centered">
            <div className="container is-narrow">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Work</h1>
                <h2 className="subtitle is-size-5-desktop">Here are a few recent design projects. Want to see more? <a href="/cdn-cgi/l/email-protection#5a373b2e2e1a2a3f343e3f3b2c352874393537">Email me</a>.</h2>
                <div className="project-grid">  
                    <div className="columns is-multiline is-mobile">
                        <Card />
                    </div>
                </div>
            
                <div className="columns is-centered">
                    <div className="column"><a className="button is-primary is-outlined is-rounded is-medium" href="https://dribbble.com/mattfarley"><span className="icon"><i className="fab fa-github"></i></span><span>See more on Github</span></a></div>
                </div>
            </div>
        </section>  
    )
}

export default Work;