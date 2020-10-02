import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar as Nav } from 'react-bootstrap';
import { logout } from '../services/auth';


const handleLogout = props => {
	logout().then(() => {
    props.setUser(null);
  })
}

export default function Navbar(props) {
  return (
    <Nav className='nav justify-content-end' bg='primary'>
			<Nav.Brand><h2>AstroShare</h2></Nav.Brand> 
			<Nav.Toggle aria-controls="responsive-navbar-nav" />
			<Nav.Collapse id="responsive-navbar-nav"></Nav.Collapse>
			<Nav className="mr-auto">
      {props.user && <Nav.Brand>Welcome {props.user.username} 🍺</Nav.Brand>}
      <Nav.Brand>
        <Link to='/'>Home</Link>
      </Nav.Brand>
      {props.user ? (
        <>
          <Nav.Brand>
            <Link to='/' onClick={() => handleLogout(props)}>Logout</Link>
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
  )
}
