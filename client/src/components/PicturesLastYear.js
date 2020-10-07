import React, { Component } from "react";
import axios from "axios";
import ListItem from "./ListItem";
import FindBar from "./FindBar";

export default class PicturesLastYear extends Component {
	state = {
		data: [],
		query: "",
	};

	getInfo = async () => {
		let response = await axios.get("pictureOfTheDay.json");
		this.setState({ data: response.data });
	};

	componentDidMount() {
		this.getInfo();
	}

	handleQuery = async (newValue) => {
		this.setState({
			query: newValue,
		});
		let response = await axios.get("pictureOfTheDay.json");
		let newArr = response.data.filter((word) => {
			//console.log(word);
			return word.title.toLowerCase().includes(this.state.query.toLowerCase());
		});

		this.setState({
			data: newArr,
		});
	};

	render() {
		console.log(this.state.query);
		return (
			<div>
				<FindBar query={this.state.query} handleQuery={this.handleQuery} />
				<div>
					{this.state.data.map((item) => (
						<ListItem data={item} key={item.date} />
					))}
				</div>
			</div>
		);
	}
}
