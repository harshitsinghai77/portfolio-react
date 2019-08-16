import React from 'react';
import Interest from './interest';
import Proficient from './proficient';
import Library from './library';
import '../css/main.css';

const Programming = () => {
    return (
        <section className="section skills has-text-centered">
            <div className="container is-narrow">
                <div className="box">
                    <div className="content">
                        <div className="columns is-centered">
                            <Proficient />
                            <Library />
                            <Interest />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Programming;