import React, { Component } from "react";

class ListItem extends Component {
  render() {
    console.log("this are the props", this.props);
    return (
      <div>
        <h1>{this.props.data.explanation}</h1>
      </div>
    );
  }
}

export default ListItem;
