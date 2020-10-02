import React, { Component } from "react";
import ListItem from "./ListItem";
import axios from "axios";

export default class ImageCar extends Component {
  state = {
    year: 2000,
    month: "02",
    data: [],
    image: "",
    title: "",
    explanation: "",
    date: "",
  };

  getInfo() {
    let yearArr = [];
    for (let i = 1; i < 9; i++) {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?date=${this.state.year}-${this.state.month}-0${i}&api_key=YvAJe2JedQpdEB7waYUIly16t4h4T5AgBe1gVsMV`
        )
        .then((response) => {
          // console.log('this is response', response.data);
          yearArr.push(response.data);
          // const {url, title, explanation, date} = response.data
          // this.setState({
          // 	image: url,
          // 	title: title,
          // 	explanation: explanation,
          // 	date: date,
          // })
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
    console.log("render.data", this.state.data);
    return (
      <>
        {this.state.data.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          this.state.data.map((item) => <ListItem data={item} />)
        )}
      </>
    );
  }
}
