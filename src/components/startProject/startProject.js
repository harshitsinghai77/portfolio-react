import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {

    return(
        <section className="section call-to-action is-primary has-text-centered">
            <div className="container is-narrow">
                <div className="box">
                    <div className="columns level">
                        <div className="column level-item">
                            <h1 className="title">Start a project</h1>
                        </div>
                        <div className="column level-item">
                            <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
                        </div>
                        <div className="column level-item"><Link className="button is-primary is-outlined is-rounded is-medium" to="/project-collaboration">Let's do this</Link></div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Project;