import React from 'react';
import Card from './card.js'
import '../css/main.css';

const Companies = () => {
    return (
        <div>
            <section className="section is-medium is-primary has-text-centered is-long-ish">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-three-fifths">
                            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Companied I've Worked With</h1>
                            <h2 className="subtitle is-size-5-desktop">I'm a bit of a digital product junky. Over the years, I've demoed and trialed many web and mobile apps in different domains and verticals.</h2>
                        </div>
                    </div>
                </div>
            </section>
            <Card />
        </div>
    )
}

export default Companies;