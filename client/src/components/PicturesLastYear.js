import React, { Component } from "react";
import axios from "axios";
import ListItem from "./ListItem";
import FindBar from "./FindBar";

export default class PicturesLastYear extends Component {
  state = {
    data: [],
    query: "",
  };

  getInfo = async () => {
    let response = await axios.get("pictureOfTheDay.json");
    this.setState({ data: response.data });
  };

  componentDidMount() {
    this.getInfo();
  }

  handleQuery = async (newValue) => {
    this.setState({
      query: newValue,
    });
    let response = await axios
      .get("pictureOfTheDay.json")
      .filter((word) => newValue);

    this.setState({
      data: response.data,
    });
  };

  render() {
    return (
      <div>
        <FindBar query={this.state.query} handleQuery={this.handleQuery} />
        <div>
          {this.state.data.map((item) => (
            <ListItem data={item} key={item.date} />
          ))}
        </div>
      </div>
    );
  }
}
