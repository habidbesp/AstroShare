import React, { Component } from "react";
import axios from "axios";
import PictureItems from "./PictureItems";

export default class PictureInfo extends Component {
  state = {
    pictureDetails: null,
  };

  getPictureData = () => {
    const pictureDate = this.props.match.params.date;
    console.log(pictureDate);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${pictureDate}&api_key=YvAJe2JedQpdEB7waYUIly16t4h4T5AgBe1gVsMV`
      )
      .then((response) => {
        this.setState({
          pictureDetails: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getPictureData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.date !== this.props.match.params.date) {
      this.getPictureData();
    }
  }

  render() {
    const details = this.state.pictureDetails;
    // console.log(details);
    if (!details) return <></>;
    return (
      <>
        <PictureItems data={details} key={details.date} />
      </>
    );
  }
}
