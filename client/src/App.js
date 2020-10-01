import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ContactInfo from "./components/ContactInfo";
import ImageCar from "./components/ImageCar";
import IntroApp from "./components/IntroApp";
import SearchBar from "./components/SearchBar";

class App extends Component {
	render() {
		let links = [
			{ label: "Home", link: "#home", active: true },
			{ label: "SignUp", link: "#signup" },
			{ label: "LogIn", link: "#login" },
		];

		return (
			<div className='container center'>
				<NavBar links={links} />
			</div>
		);
	}
}

export default App;
