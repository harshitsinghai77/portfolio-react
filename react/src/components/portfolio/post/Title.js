import React from 'react';
import './style.css';

const Title = (props) => {
    return (
        <h3 className="title">{props.heading}</h3>
    )
}

export default Title;