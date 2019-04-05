import React from 'react';
import JSON from './hackathon.json'
import '../css/main.css';

const Clubs = () => {

    const collab = JSON.map((item) => {
        return (
            <div key = {item.key} className="column is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1"><img className="client-logo" src={require(`${item.imgSrc}`)} alt = {item.alt} /></figure>
            </div>
        )
    });

    return (
        <section className="section clients is-medium is-white has-text-centered">
            <div className="container is-narrow">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <h1 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile">I've been fortunate enough to participate in these hackathons:</h1>
                    </div>
                </div>
                <div className="client-grid">
                    <div className="columns is-multiline is-mobile">
                        {collab}
                    </div>
                </div>
            </div>
      </section>
    )
}

export default Clubs;