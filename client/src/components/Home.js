import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Home extends Component {
	render() {
		return (
			<div className='backgroundimage'>
				<div>
					<div>
						<Link to='/pictureOfTheDay'>
							<Button>
								<h6>See the Picture of the Day</h6>
							</Button>
						</Link>
					</div>
					<div>
						<Link to='/picturesLastYear'>
							<Button>
								<h6>Our Collection</h6>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
