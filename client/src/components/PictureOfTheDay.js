import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

export default class PictureOfTheDay extends Component {
	state = {
		copyright: "",
		date: "",
		explanation: "",
		hdurl: "",
		media_type: "",
		service_version: "",
		title: "",
		url: "",
	};

	getData = () => {
		axios
			.get("https://api.nasa.gov/planetary/apod?api_key=YvAJe2JedQpdEB7waYUIly16t4h4T5AgBe1gVsMV")
			.then((response) => {
				let {
					copyright,
					date,
					explanation,
					hdurl,
					media_type,
					service_version,
					title,
					url,
				} = response.data;
				this.setState({
					copyright: copyright,
					date: date,
					explanation: explanation,
					hdurl: hdurl,
					media_type: media_type,
					service_version: service_version,
					title: title,
					url: url,
				});
			})
			.catch((err) => console.log(err));
	};

	componentDidMount() {
		this.getData();
	}

	render() {
		// console.log(this.state);
		return (
			<div>
				<div>
					{this.state.media_type === "video" ? (
						<ReactPlayer url={this.state.url} controls={true} />
					) : (
						<img src={this.state.url} alt={this.state.title} />
					)}
				</div>
				<h2>{this.state.title}</h2>
				<p>{this.state.date}</p>
				{this.state.copyright ? <p>Copyright© {this.state.copyright}</p> : <></>}
				<p>{this.state.explanation}</p>
			</div>
		);
	}
}
