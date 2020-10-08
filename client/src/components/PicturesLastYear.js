import React, { Component } from "react";
import axios from "axios";
import FindBar from "./FindBar";
import ListOfPictures from "./ListOfPictures";
import { Link } from "react-router-dom";

export default class PicturesLastYear extends Component {
	state = {
		data: [],
		query: "",
	};

	getInfo = async () => {
		let response = await axios.get("project.json");
		this.setState({ data: response.data });
	};

	componentDidMount() {
		this.getInfo();
	}

	handleQuery = async (newValue) => {
		this.setState({
			query: newValue,
		});
		let response = await axios.get("project.json");
		let newArr = response.data.filter((word) => {
			return word.title.toLowerCase().includes(newValue.toLowerCase());
		});
		this.setState({
			data: newArr,
		});
	};

	render() {
		return (
			<>
				<div class='container'>
					<div>
						<Link to='/pictureOfTheDay'>
							<h3>To "The Picture of the Day"</h3>
						</Link>
					</div>
					<div>
						<FindBar query={this.state.query} handleQuery={this.handleQuery} />
					</div>
					<div class='container'>
						<div class='row'>
							{this.state.data.map((item, index) => (
								<div class='col-3'>
									<ListOfPictures data={item} key={index} />
								</div>
							))}
						</div>
					</div>
				</div>
			</>
		);
	}
}
