import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

export default class Year extends Component {
	state = {
		pictureDetails: null,
	};

	getPictureData = () => {
		const pictureDate = this.props.match.params.year;
		console.log(pictureDate);
		axios
			.get(
				`https://api.nasa.gov/planetary/apod?start_date=${Year}-01-01&end_date=${Year}-12-31&api_key=m9tEyBvgSAadPMun0avSsJPMD8vd03jMA0sKnOAf`
			)
			.then((response) => {
				this.setState({
					pictureDetails: response.data,
				});
			})
			.catch((err) => console.log(err));
	};

	componentDidMount() {
		this.getPictureData();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.date !== this.props.match.params.date) {
			this.getPictureData();
		}
	}

	render() {
		const details = this.state.pictureDetails;
		console.log(details);
		if (!details) return <></>;
		return (
			<div>
				<div>
					{details.media_type === "video" ? (
						<ReactPlayer url={details.url} controls={true} />
					) : (
						<img src={details.url} alt={details.title} />
					)}
				</div>
				<h2>{details.title}</h2>
				<p>Date: {details.date}</p>
				{details.copyright ? <p>Copyright© {details.copyright}</p> : <></>}
				<p>{details.explanation}</p>
			</div>
		);
	}
}
