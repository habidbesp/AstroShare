import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import AddImage from "./AddImage";

export default class ListOfPictures extends Component {
  render() {
    const items = this.props.data;
    // console.log(items);
    return (
      <div>
        <div>
          {items.media_type === "video" ? (
            <ReactPlayer url={items.url} controls={true} />
          ) : (
            <img src={items.url} alt={items.title} />
          )}
          <Link key={items.date} to={`/picturesLastYear/${items.date}`}>
            <p>{items.date}</p>
            <h2>{items.title}</h2>
          </Link>
          <AddImage imageDetails={items} user={this.props.user} />
        </div>
      </div>
    );
  }
}
