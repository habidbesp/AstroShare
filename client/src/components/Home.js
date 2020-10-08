import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/pictureOfTheDay">
            <Button>
              <h3>To "The Picture of the Day"</h3>
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/picturesLastYear">
            <Button>
              <h3>Our Collection</h3>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
