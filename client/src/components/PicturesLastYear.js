import React, { Component } from "react";
import axios from "axios";
import FindBar from "./FindBar";
import ListOfPictures from "./ListOfPictures";
import { Link } from "react-router-dom";

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
        <div>
          <Link to="/pictureOfTheDay">
            <h1>To "The Picture of the Day"</h1>
          </Link>
        </div>
        <div>
          <FindBar query={this.state.query} handleQuery={this.handleQuery} />
        </div>
        <div>
          {this.state.data.map((item, index) => (
            <ListOfPictures data={item} key={index} user={this.state.user} />
          ))}
        </div>
      </>
    );
  }
}
