import React from 'react';
import image from './icon-frontend.svg'
import '../css/main.css';

const Library = () => {
    return (
        <div className="column"> 
            <figure className="image"><img className="is-skill-icon" src={image} alt = "logo" /></figure>
            <h1 className="title is-size-4 is-spaced">Languages, Tools, Scripts and Library I'm familar with</h1>
            <p>I tend to code things from scratch, and enjoy bringing ideas to life.</p>
            <p className="list-title has-text-primary has-text-weight-normal">Tools and Script</p>
            <ul>
                <li>Keras</li>
                <li>TensorFlow</li>
                <li>GraphQL</li>
                <li>Vue.js</li>
                <li>Git</li>
                <li>Hadoop(HDFS)</li>
                <li>Spark</li>
                <li>Hive</li>
                <li>Pig Latin</li>
                <li>Azure</li>
                <li>MySQL</li>
            </ul>
        </div>
    )
}

export default Library;