import React, { Fragment } from 'react';
import JSON from './work.json';


const WorkCard = () => {

    const work = JSON.map((item) => {
        return (
          <div key = {item.id} className="column is-12-mobile is-half-tablet is-one-third-desktop">
                <figure className="image is-3by2"><img className="project-thumb" src={item.image} alt = {item.alt} />
                  <figcaption>
                    <h1 className="title is-size-5 is-size-4-widescreen">{item.description}</h1><a className="button is-primary is-outlined is-rounded" href={item.link} ><span>Visit Website</span><span className="icon"><i className="fas fa-angle-right"></i></span></a>
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