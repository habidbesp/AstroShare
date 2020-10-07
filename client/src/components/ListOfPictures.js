import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default class ListOfPictures extends Component {
  render() {
    const items = this.props.data;
    console.log(items);
    return (
      <div>
        <div>
          <p>{items.date}</p>
          {items.media_type === "video" ? (
            <ReactPlayer url={items.url} controls={true} />
          ) : (
            <img src={items.url} alt={items.title} />
          )}
          <Link key={items.date} to={`/picturesLastYear/${items.date}`}>
            <h2>{items.title}</h2>
          </Link>
        </div>
      </div>
    );
  }
}