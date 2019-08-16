import React from 'react';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import '../css/main.css';

function linkify(text) {
	return text.trim().toLowerCase().replace(/ /g, '-');
}

const Cards  = (props) => {
	const {data} = props;
	return data.map((item) => {
		return (
			<div key = {item._id} className="column is-12-mobile is-half-tablet is-one-third-desktop">
				<Link to = {linkify(item.name)}>
					<figure className="image is-3by2"><img className="project-thumb" src={item.imageUrl} alt = {item.name} />
						<figcaption>
						<h1 className="title is-size-5 is-size-4-widescreen">{item.description}</h1>
						</figcaption>
						<div className="overlay"></div>
					</figure>
				</Link>
			</div>
		)
	});
};

const WorkCard = () => {
	const [data, setData] = React.useState([])
	React.useEffect(() => {
		window.axiosInstance.get('get-projects')
			.then(res => setData(res.data))
	}, [])

	return (
		<React.Fragment>
			{data.length > 0 ? 
				<Cards data = {data} /> : 
				<Spin style = {{margin: '0 auto'}} size="large" />
			}
		</React.Fragment>
    )
}


export default React.memo(WorkCard);