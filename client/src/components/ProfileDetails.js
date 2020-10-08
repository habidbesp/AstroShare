import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import DeleteImage from "./DeleteImage";
import { Link } from "react-router-dom";

export default class ProfileDetails extends Component {
  state = {
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
    let arrImages = this.state.data;
    let userId = this.props.user._id;
    const picturesOwner = arrImages.filter((items) => {
      if (items.owner === userId) return items;
    });
    return (
      <div>
        <h1>Welcome to your profile page,</h1>
        <h1>{this.props.user.username}</h1>
        {picturesOwner.map((picture) => {
          return (
            <div key={picture._id}>
              {picture.media_type === "video" ? (
                <ReactPlayer url={picture.url} controls={true} />
              ) : (
                <img src={picture.url} alt={picture.title} />
              )}
              <Link
                key={picture._id}
                data={picture}
                to={`/profile/${picture._id}`}
              >
                <h2>{picture.title}</h2>
              </Link>
              <DeleteImage
                data={picture}
                user={this.props.user}
                getData={this.getData}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
