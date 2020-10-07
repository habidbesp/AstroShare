import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Image } from "react-bootstrap";

class ListItem extends Component {
	render() {
		// console.log("this are the props", this.props.data);
		const items = this.props.data;
		// console.log("This is items", items);
		return (
			<div>
				<div>
					{items.media_type === "video" ? (
						<ReactPlayer url={items.url} controls={true} />
					) : (
						<Link to={items.date}>
							<Image src={items.url} alt={items.title} fluid />
						</Link>
					)}
				</div>

				{items.media_type === "video" ? <Link to={items.date}>Details of this Video</Link> : <></>}
				<h2>{items.title}</h2>
				<p>{items.date}</p>
			</div>
		);
	}
}

export default ListItem;
