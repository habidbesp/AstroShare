import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ContactInfo from "./components/ContactInfo";
import ImageCar from "./components/ImageCar";
import IntroApp from "./components/IntroApp";
import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, link } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<div className='container center'>
					<h2>Astro</h2>

					<Route path='/' exact component={NavBar} />
					<Route path='/edit/:id' component={SearchBar} />
					<Route path='/create' component={IntroApp} />
				</div>
			</Router>
		);
	}
}

export default App;
