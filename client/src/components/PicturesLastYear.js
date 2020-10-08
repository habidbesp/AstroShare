import React, { Component } from "react";
import axios from "axios";
import FindBar from "./FindBar";
import ListOfPictures from "./ListOfPictures";

export default class PicturesLastYear extends Component {
	state = {
		data: [],
		query: "",
		user: this.props.user,
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
					<div></div>
					<div>
						<FindBar query={this.state.query} handleQuery={this.handleQuery} />
					</div>
					<div class='container'>
						<div class='row'>
							{this.state.data.map((item, index) => (
								<div class='col-3'>
									<ListOfPictures data={item} key={index} user={this.state.user} />
								</div>
							))}
						</div>
					</div>
				</div>
			</>
		);
	}
}
