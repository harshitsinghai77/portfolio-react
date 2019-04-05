import React from 'react';
import '../css/main.css';

const Achievement = () => {
    return (
        <section className="section clients is-medium is-white has-text-centered">
            <div className="container is-narrow">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <h1 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile">Achievement</h1>
                    </div>
                </div>
                <div className="client-grid">
                    <div className="columns is-multiline is-mobile">
                        <ul>
                            <h3 className="subtitle is-size-5-desktop">
                                <li>Software Engineer Intern at Opalina Technologies.</li>
								<li>Selected for the Grand Finale of Smart India Hackathon 2019</li>
								<li>Secured 1st Position in MLH 2018 Local Hackday Hackathon hosted by GitHub</li>
								<li>Secured 3rd position at hackBMU hackathon BML Munjal University.</li>
								<li>Top 5 in SNU HackData 2019</li>
                            </h3>
                            <h3 className="subtitle is-size-5-desktop">
								Prior to joining Opalina Technologies as a software engineer intern in 2018, I was nominated as the
								technical head of ACM Student Chapter and Google Developer Student Club. I was also fortunate enough to
								work with Leading India.ai nationwide initiative on "AI and deep learning Skilling and Research". 
                                Last semester I was selected as a Teaching Assistant, helping Sophomore students in their Python coursework and projects. At DSC I was handled with the responsibility to head the app development team.
                            </h3>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievement;