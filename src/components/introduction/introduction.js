import React from 'react';
import '../css/main.css';

const Introduction = () => {
    return (
        <section className="hero is-white has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Software Engineer, Programmer &amp; Interested in Deep Learning</h1>
                            <h2 className="subtitle is-size-4-desktop">I design and code beautifully simple things, and I love what I do.</h2><img className="avatar" src="http://mattfarley.ca/img/mf-avatar.svg" alt = "harshitsinghai77 avatar" />
                        </div>  
                    </div>
                </div>
            </div>
            <div className="hero-foot">
                <div className="container"><img className="is-bottom" src="http://mattfarley.ca/img/hero.png" alt = "harshitsinghai77" /></div>
            </div>
        </section>
    )
}

export default Introduction;