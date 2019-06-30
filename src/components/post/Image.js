import React from 'react';
import './style.css';
import PropTypes from 'prop-types';



const Image = (props) => {
    const {url} = props
    
    return (
        <div className="col-md-12">
            <img className="img-raised rounded img-fluid" alt="RaisedImage" src = {url} />
        </div>
    )
}

Image.propTypes = {
    url: PropTypes.string.isRequired
};

export default Image;