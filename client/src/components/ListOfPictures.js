import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default class ListOfPictures extends Component {
	render() {
		const items = this.props.data;
		//console.log(items);
		return (
			<div>
				<div>
					{items.media_type === "video" ? (
						<ReactPlayer className='w-100' url={items.url} controls={true} />
					) : (
						<img class='w-100' src={items.url} alt={items.title} />
					)}
					<Link key={items.date} to={`/collection/${items.date}`}>
						<p>{items.date}</p>
						<h5>{items.title}</h5>
					</Link>
				</div>
			</div>
		);
	}
}
