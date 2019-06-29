import React from 'react';
import './style.css';


const Header = (props) => {
    return (
        <div className="page-header header-filter" data-parallax="true" style={{backgroundImage: `url(${props.backgroundImage})`}} >
            <div className="container">
                <div className="row">
                    <div className="col-md-8 ml-auto mr-auto text-center">
                        <h1 className="title">{props.title}</h1>
                        <h4 style = {{color : 'white'}}>{props.subtitle}</h4>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;