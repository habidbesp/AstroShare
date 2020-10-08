import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export default class DeleteImage extends Component {
  deleteImage = () => {
    console.log(this.props);
    const id = this.props.data._id;
    axios
      .delete(`/api/images/${id}`)
      .then(() => {
        this.props.getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Button variant="danger" onClick={this.deleteImage}>
          Delete This Image
        </Button>
      </div>
    );
  }
}
