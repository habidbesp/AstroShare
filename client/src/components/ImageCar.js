import React, { Component } from "react";
import ListItem from "./ListItem";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default class ImageCar extends Component {
  state = {
    data: [],
    startDateQuery: "2015-01-30",
    finishDateQuery: "2015-01-31",
  };

  handleChange = (newValue, name) => {
    console.log(newValue, name);

    this.setState({
      [name]: newValue,
    });
    console.log("work?", this.state);
  };

  getInfo = async () => {
    let response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=YvAJe2JedQpdEB7waYUIly16t4h4T5AgBe1gVsMV&start_date=${this.state.startDateQuery}&end_date=${this.state.finishDateQuery}`
    );
    this.setState({ data: response.data });
  };

  componentDidMount() {
    this.getInfo();
  }

  componentDidUpdate() {
    this.getInfo();
  }

  render() {
    // console.log("render.data", this.state.data);
    return (
      <div>
        <div>
          <Link to="/pictureOfTheDay">
            <h1>To "The Picture of the Day"</h1>
          </Link>
        </div>
        <div>
          <Link to="/picturesLastYear">To Pictures of las Year</Link>
        </div>
        <div>
          <SearchBar
            startDate={this.state.startDateQuery}
            endDate={this.state.finishDateQuery}
            dateChange={this.handleChange}
          />
        </div>

        <>
          {this.state.data.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            this.state.data.map((item) => (
              <ListItem data={item} key={item.date} />
            ))
          )}
        </>
      </div>
    );
  }
}
