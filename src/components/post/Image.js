import React from 'react';
import './style.css';


const Image = (props) => {
    return (
        <div className="col-md-12">
            <img className="img-raised rounded img-fluid" alt="RaisedImage" src = {props.url} />
        </div>
    )
}

export default Image;