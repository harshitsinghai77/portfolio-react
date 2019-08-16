import React from 'react';
import './style.css';
import { Markup } from 'interweave';

const Content = (props) => {

    return (
        <div>
            <Markup content={props.para} />
        </div>
    )
}

export default Content;