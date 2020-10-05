import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ContactInfo from "./components/ContactInfo";
import ImageCar from "./components/ImageCar";
import IntroApp from "./components/IntroApp";
import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PictureInfo from "./components/PictureInfo";
import Year from "./components/Year";
import Month from "./components/Month";
import Day from "./components/Day";

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

				<Route exact path='/' component={ImageCar} />

				{/* <Route 
          exact
          path='/edit/:id' 
          component={SearchBar} /> */}

				{/* <Route 
          exact
          path='/create' 
          component={IntroApp} />  */}

				<Route exact path='/list/:year' component={Year} />

				<Route exact path='/list/:year/:month' component={Month} />

				<Route exact path='/list/:year/:month/:day' component={Day} />

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
