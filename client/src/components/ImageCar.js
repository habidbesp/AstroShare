import React, { Component } from "react";
import ListItem from "./ListItem";
import axios from "axios";

export default class ImageCar extends Component {
  state = {
    year: 2020,
    month: "09",
    data: [],
  };

  getInfo() {
    let yearArr = [];
    for (let i = 1; i <= 30; i++) {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?date=${this.state.year}-${this.state.month}-${i}&api_key=YvAJe2JedQpdEB7waYUIly16t4h4T5AgBe1gVsMV`
        )
        .then((response) => {
          yearArr.push(response.data);
          // console.log("This is arrYear", yearArr);
          this.setState({
            data: yearArr,
          });
        })
        .catch((err) => console.log(err));
    }
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    // console.log("render.data", this.state.data);
    return (
      <>
        {this.state.data.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          this.state.data.map((item) => (
            
            <ListItem data={item} key={item.date} />
          ) )
        )}
      </>
    );
  }
}
