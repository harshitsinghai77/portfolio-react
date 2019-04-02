import React, { Component } from 'react';
import Header from '../header/header';
import '../css/main.css';

class ProjectForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            details: '',
            title: this.props.title
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render(){

        return(
           <div>
               <Header />
               <div className="is-form-page">
                    <section className="is-white has-text-centered">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-three-quarters"><img className="avatar" alt = "avatarImage" src="http://mattfarley.ca/img/mf-avatar.svg" />
                                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">{this.state.title}</h1>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="is-white">
                        <div className="container">     
                            <form id="form">
                                <div className="columns is-centered">
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">Name</label>
                                            <div className="control is-expanded">
                                                <input className="input is-large" onChange = {event => this.setState({name : event.target.value})} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <div className="field">
                                            <label className="label">Email</label>
                                            <div className="control is-expanded">
                                                <input className="input is-large" onChange = {event => this.setState({email : event.target.value})} required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns is-centered">
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Additional details</label>
                                            <div className="control is-expanded">
                                                <textarea className="textarea is-large" onChange = {event => this.setState({details : event.target.value})} rows="5" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns is-centered">
                                    <div className="column is-one-third">
                                        <div className="field">
                                            <div className="control">
                                                <button className="button is-primary is-outlined is-medium is-fullwidth is-rounded">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
           </div>
        )
    }
}

export default ProjectForm;