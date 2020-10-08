import React, { Component } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

export default class UserDetails extends Component {
	state = {
		userDetails: {},
	};

	componentDidMount() {
		this.getUserData();
	}

	getUserData = () => {
		axios
			.get(`/api/user/${this.props.user._id}`)
			.then((response) => {
				console.log(response);
				this.setState({
					userDetails: response.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return (
			<div>
				<h1>Hallo</h1>
			</div>
		);
	}
}
