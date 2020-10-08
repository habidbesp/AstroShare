import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class AddImage extends Component {
  state = {
    date: this.props.imageDetails.date,
    explanation: this.props.imageDetails.explanation,
    hdurl: this.props.imageDetails.hdurl,
    media_type: this.props.imageDetails.media_type,
    service_version: this.props.imageDetails.service_version,
    title: this.props.imageDetails.title,
    url: this.props.imageDetails.url,
    userId: this.props.user,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("hello", this.state.userId);
    axios
      .post("/api/images/", {
        date: this.state.date,
        explanation: this.state.explanation,
        hdurl: this.state.hdurl,
        media_type: this.state.media_type,
        service_version: this.state.service_version,
        title: this.state.title,
        url: this.state.url,
        owner: this.state.userId,
      })
      .then(() => {
        this.setState({
          date: "",
          explanation: "",
          hdurl: "",
          media_type: "",
          service_version: "",
          title: "",
          url: "",
        });
        // this.props.getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Button type="submit">Add To Your Favorites</Button>
      </Form>
    );
  }
}
