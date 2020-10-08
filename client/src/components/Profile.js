import React, { Component } from "react";
import ProfileDetails from "./ProfileDetails";

export default class Profile extends Component {
	render() {
		// console.log(this.props);
		return (
			<div>
				<ProfileDetails user={this.props.user} />
			</div>
		);
	}
}
