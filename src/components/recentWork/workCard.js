import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';

const WorkCard = () => {

	const [data, setData] = React.useState([])

	React.useEffect(() => {
		window.axiosInstance.get('get-projects')
			.then(res => {
				setData(res.data)
			})
	}, [])

	function linkify(text) {
		return text.trim().toLowerCase().replace(/ /g, '-');
	}
	
    const work = data && Array.isArray(data) ? data.map((item) => {
		return (
			<div key = {item._id} className="column is-12-mobile is-half-tablet is-one-third-desktop">
					<Link to = {`/blog/${linkify(item.name)}`}>
						<figure className="image is-3by2"><img className="project-thumb" src={item.imageUrl} alt = {item.name} />
							<figcaption>
							<h1 className="title is-size-5 is-size-4-widescreen">{item.description}</h1>
							</figcaption>
							<div className="overlay"></div>
						</figure>
					</Link>
			</div>
		)
    }) : null

    return (
		<React.Fragment>
			{work}
		</React.Fragment>
    )
}


export default WorkCard