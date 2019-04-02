import React from 'react';
import image from './icon-designer.svg'
import '../css/main.css';

const Proficient = () => {
    return (
        <div className="column">
            <figure className="image"><img className="is-skill-icon" src={image} alt = "logo" /> </figure>
            <h1 className="title is-size-4 is-spaced">Proficient</h1>
            <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
            <p className="list-title has-text-primary has-text-weight-normal">Languages</p>
            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
            </ul>
        </div>
    )
}

export default Proficient;