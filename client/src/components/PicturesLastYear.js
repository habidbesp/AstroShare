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
				<div className='container'>
					<div></div>
					<div>
						<FindBar query={this.state.query} handleQuery={this.handleQuery} />
					</div>
					<div className='container'>
						<div className='row'>
							{this.state.data.length === 0 ? (
								<h1>Loading...</h1>
							) : (
								this.state.data.map((item, index) => (
									<div className='col-3'>
										<ListOfPictures data={item} key={index} user={this.state.user} />
									</div>
								))
							)}
						</div>
					</div>
				</div>
			</>
		);
	}
}
