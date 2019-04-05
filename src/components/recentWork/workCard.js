import React, { Fragment } from 'react';
import JSON from './work.json';
import { Link } from 'react-router-dom';
import '../css/main.css';

const WorkCard = () => {

    const work = JSON.map((item) => {
        return (
			  <div key = {item.id} className="column is-12-mobile is-half-tablet is-one-third-desktop">
					<figure className="image is-3by2"><img className="project-thumb" src={require(`${item.imgSrc}`)} alt = {item.alt} />
						<figcaption>
						  <h1 className="title is-size-5 is-size-4-widescreen">{item.description}</h1>
						</figcaption>
						<div className="overlay"></div>
					  </figure>
			  </div>
		)
    })

    return (
      <Fragment>
          {work}
      </Fragment>
    )
}


export default WorkCard