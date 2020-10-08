import React, { Component } from "react";
import PictureItems from "./PictureItems";
import dataNASA from "../dataNASA.json";
import AddImage from "./AddImage";

export default class PictureDetails extends Component {
  render() {
    const getPictureByDate = (date) => dataNASA.find((el) => el.date === date);

    const picture = { ...getPictureByDate(this.props.match.params.date) };

    if (!picture) return <></>;
    return (
      <div>
        <div>{<PictureItems data={picture} key={picture.date} />}</div>
        {this.props.user ? (
          <AddImage imageDetails={picture} user={this.props.user} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
