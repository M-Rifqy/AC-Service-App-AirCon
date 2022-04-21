import React from 'react';
import './style.scss';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

export default function Navigation() {

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    window.location.reload();
  }

  return (
    <>
  <Navbar className='navbar' collapseOnSelect expand="md" fixed='top'>
    <Container className='container'>
      <Navbar.Brand as={Link} className='brand' to="/">
      <span><img src={require('../../materials/octagon.png')} alt='octagon' className='octagon'/>
            AirCon
          </span>
      </Navbar.Brand>
      <Navbar.Toggle className='toggleCustom' aria-controls="responsive-navbar-nav">
        <HiOutlineMenuAlt3 className='menu-icon'/>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link as={Link} className='navItem text-center' to="/">HOME</Nav.Link>
          <Nav.Link as={Link} className='navItem text-center' to="/about">ABOUT</Nav.Link>
          <Nav.Link as={Link} className='navItem text-center' to="/service">SERVICE</Nav.Link>
          <Nav.Link as={Link} className='navItem text-center' to="/contact">CONTACT</Nav.Link>
        </Nav>
        <Nav className='btn-kontener'>
        <Button as={Link} to='/book' className='book-btn mx-2'>BOOK NOW</Button>
        {localStorage.getItem("access_token") ? (
          <Button className='logout-btn' onClick={handleLogout}>Logout</Button> ) : (
          <Button as={Link} to='/login' className='login-btn'>Account</Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  );
}