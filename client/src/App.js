import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ContactInfo from "./components/ContactInfo";
import ImageCar from "./components/ImageCar";
import IntroApp from "./components/IntroApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PictureInfo from "./components/PictureInfo";
import PictureOfTheDay from "./components/PictureOfTheDay";
import PicturesLastYear from "./components/PicturesLastYear";

class App extends Component {
	state = {
		user: this.props.user,
	};

	setUser = (user) => {
		this.setState({
			user: user,
		});
	};

	render() {
		return (
			<div className='App'>
				<Navbar user={this.state.user} setUser={this.setUser} />

				<Route exact path='/pictureOfTheDay' component={PictureOfTheDay} />

				<Route exact path='/picturesLastYear' component={PicturesLastYear} />

				<Route exact path='/' component={ImageCar} />

				<Route exact path='/:date' component={PictureInfo} />

				<Route
					exact
					path='/signup'
					render={(props) => <Signup setUser={this.setUser} {...props} />}
				/>

				<Route
					exact
					path='/login'
					render={(props) => <Login setUser={this.setUser} {...props} />}
				/>
			</div>
		);
	}
}

export default App;
