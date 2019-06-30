import React from 'react';
import '../css/main.css';
import avatar from './avatar.svg'
import BGImage from './portfolio-image-bg.png'
import Typed from 'react-typed';

const Introduction = () => {
    return (
        <section className="hero is-white has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <h2 className="title is-spaced is-size-1-desktop is-size-4-tablet is-size-3-mobile">
                            Software Engineer, {' '}
                            <Typed 
                                strings={['Programmer', 'Deep Learning Enthusiast', 'Web Developer',]} 
                                typeSpeed={40}
                                backSpeed={50}  
                                loop 
                            />
                            </h2>
                            <h2 className="subtitle is-size-4-desktop">I design and code beautifully simple things, and I love what I do.</h2><img className="avatar" src={avatar} alt = "harshitsinghai77 avatar" />
                        </div>  
                    </div>
                </div>
            </div>
            <div className="hero-foot">
                <div className="container"><img className="is-bottom" src={BGImage} alt = "harshitsinghai77" /></div>
            </div>
        </section>
    )
}

export default Introduction;