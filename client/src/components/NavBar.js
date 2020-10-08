import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import { logout } from "../services/auth";
//import { icon } from "./images/icon.png";
import { Navigationbar } from "../Navigationbar.css";

const handleLogout = (props) => {
	logout().then(() => {
		props.setUser(null);
	});
};

export default function Navbar(props) {
	return (
		<Nav className='nav justify-content-end' bg='dark'>
			<Nav.Brand>
				<img src='https://res.cloudinary.com/dphwm7fwh/image/upload/c_scale,h_84,w_205/v1602080947/icon_t858pj.png' />
			</Nav.Brand>
			<Nav.Toggle aria-controls='responsive-navbar-nav' />
			<Nav.Collapse id='responsive-navbar-nav'></Nav.Collapse>
			<Nav className='mr-auto'>
				{props.user && <Nav.Brand>Welcome {props.user.username} 🚀</Nav.Brand>}

				<Nav.Brand>
					<Link to='/'>Home</Link>
				</Nav.Brand>

				{props.user ? (
					<>
						<Nav.Brand>
							<Link to='/picturesLastYear/profile'>Profile</Link>
						</Nav.Brand>
						<Nav.Brand>
							<Link to='/' onClick={() => handleLogout(props)}>
								Logout
							</Link>
						</Nav.Brand>
					</>
				) : (
					<>
						<Nav.Brand>
							<Link to='/signup'>Signup</Link>
						</Nav.Brand>
						<Nav.Brand>
							<Link to='/login'>Login</Link>
						</Nav.Brand>
					</>
				)}
			</Nav>
		</Nav>
	);
}
