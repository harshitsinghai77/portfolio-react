import React from 'react';
import '../css/main.css';
import { withCookies } from 'react-cookie';

const About = (props) => {

    const [name, setName ] = React.useState('I’m Harshit')

    React.useEffect(() => {
        setName(props.cookies.get('name') || 'I’m Harshit')
    })

    return (
        <section className="section is-medium is-primary has-text-centered is-long">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-three-fifths">
                        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Hi, {name}. Nice to meet you.</h1>
                        <h2 className="subtitle is-size-5-desktop">
                            I'm currently a Software Engineering Intern at Leena AI. Deep learning warrior with _Python_ as shiny dagger and _Keras_ as blazing shotgun ready to fire. In my spare time, like every other geeky kid, I like to create web apps and develop tiny deep learning models while listening edm in the background thread. Apart from being a deep learning enthusiast, I like to play football, and watch rom-com/thriller movies till the late hours.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withCookies(About);