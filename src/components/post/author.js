import React from 'react';
import './style.css';


const Author = () => {
    return (
        <div className="section section-blog-info">
            <div className="row">
                <div className="col-md-8 ml-auto mr-auto">

                    <div className="card card-profile card-plain">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="card-avatar">
                                    <a href="#pablo">
                                        <img className="img" src="https://avatars0.githubusercontent.com/u/30886142" />
                                    </a>
                                    <div className="ripple-container"></div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h4 className="card-title">Harshit Singhai</h4>
                                <p className="description">I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...I like good music from Youtube.</p>
                            </div>
                            <div className="col-md-2">
                                <button type="button" className="btn btn-default pull-right btn-round">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author;