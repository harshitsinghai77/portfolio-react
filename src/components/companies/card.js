import React from 'react';
import JSON from './data.json'
import { Link } from 'react-router-dom';

const Card = () => {

    const company = JSON.map((item) => {
        return (
            <div key = {item.key} className="column level-item">
                <div className="box"><img className="logo" src={item.img} />
                <p>{item.description}</p><a className="link has-text-primary" href = {item.hyperlink}>{item.url}</a>
                </div>
            </div>
        )
    });

    return (
        <section className="section startups has-text-centered">
            <div className="container is-narrow">
                <div className="startup-grid">
                    <div className="columns is-centered level">
                        {company}
                    </div>
                </div>
                <div className="columns is-centered">
                    <div className="column">
                        <h1 className="title is-spaced">Interested in hiring me for a project?</h1>
                        <h2 className="subtitle is-size-5-desktop">I’m always open for freelancing opportunities.</h2><Link className="button is-primary is-outlined is-rounded is-medium" to="/project-hire">Start a conversation</Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Card;