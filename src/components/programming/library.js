import React from 'react';
import image from './icon-frontend.svg'
import '../css/main.css';

const Library = () => {
    return (
        <div className="column"> 
            <figure className="image"><img className="is-skill-icon" src={image} alt = "logo" /></figure>
            <h1 className="title is-size-4 is-spaced">Languages, Tools, Scripts and Library I'm familar with</h1>
            <p>Tools and Script</p>
            <p className="list-title has-text-primary has-text-weight-normal">Tools and Script</p>
            <ul>
                <li>Git</li>
                <li>Keras</li>
                <li>Matlab</li>
                <li>Hadoop(HDFS)</li>
                <li>Spark</li>
                <li>Hive</li>
                <li>Pig Latin</li>
                <li>Azure</li>
                <li>MySQL</li>
                <li>Visual Paradigm</li>
            </ul>
        </div>
    )
}

export default Library;