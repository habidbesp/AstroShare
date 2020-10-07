import React, { Component } from "react";
import axios from "axios";

export default class ProfileDetails extends Component {
  state = {
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: "",
    error: "",
    data: [],
  };

  getData = () => {
    axios
      .get(`/api/images/`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          this.setState({
            error: "Not found",
          });
        }
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <h1>Welcome to your profile page,</h1>
        <h2>{this.props.user.username}</h2>
      </div>
    );
  }
}
