import React from 'react';
import image from './icon-mentor.svg'
import '../css/main.css';

const Interest = () => {
    return (
        <div className="column">
            <figure className="image"><img className="is-skill-icon" src={image} alt = "log" /> </figure>
            <h1 className="title is-size-4 is-spaced">Area of Interest</h1>
            <p>I tend to code things from scratch, and enjoy bringing ideas to life.</p>
            <p className="list-title has-text-primary has-text-weight-normal">Domain</p>
            <ul>
                <li>Deep Learning</li>
                <li>Image and Video Processing</li>
                <li>Natural Language Processing</li>
                <li>Open Source</li>
                <li>Automation</li>
            </ul>
        </div>
    )
}

export default Interest;