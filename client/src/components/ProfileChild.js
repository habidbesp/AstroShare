import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
export default class ProfileChild extends Component {
  state = {
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    title: "",
    url: "",
    error: null,
  };

  getInfo = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/api/images/${id}`)
      .then((response) => {
        this.setState({
          date: response.data.date,
          explanation: response.data.explanation,
          hdurl: response.data.hdurl,
          media_type: response.data.media_type,
          title: response.data.title,
          url: response.data.url,
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
    this.getInfo();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.media_type === "video" ? (
            <ReactPlayer url={this.state.url} controls={true} />
          ) : (
            <img src={this.state.url} alt={this.state.title} />
          )}
          <h2>{this.state.title}</h2>
          <p>{this.state.date}</p>
          <p>{this.state.explanation}</p>
        </div>
      </div>
    );
  }
}
