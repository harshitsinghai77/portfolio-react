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
                   <section className="is-white">
                        <div className="container">     
                            <form id="form">
                                <div className="columns is-centered">
                                    <div className="column is-half">
                                        <h1>Hello world</h1>
                                    </div>
                                    <div className="column is-half">
                                        <h1>Hello world</h1>
                                    </div>
                                </div>
                                <div className="columns is-centered">
                                    <h1>Hello world</h1>
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