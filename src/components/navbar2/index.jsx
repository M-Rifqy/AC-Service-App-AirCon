import React from 'react';
import './style.scss';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

export default function Navigation2() {

   const handleLogout = () => {
     localStorage.removeItem('access_token');
     window.location.reload();
   }

    return (
    <>
  <Navbar className='navbar-2' collapseOnSelect expand="md" fixed='top'>
    <Container className='container-2'>
      <Navbar.Brand as={Link} className='brand-2' to="/">
      <span><img src={require('../../materials/octagon.png')} alt='octagon' className='octagon-2'/>
            AirCon
          </span>
      </Navbar.Brand>
      <Navbar.Toggle className='toggleCustom-2' aria-controls="responsive-navbar-nav">
        <HiOutlineMenuAlt3 className='menu-icon-2'/>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link as={Link} className='navItem-2 text-center' to="/">HOME</Nav.Link>
          <Nav.Link as={Link} className='navItem-2 text-center' to="/about">ABOUT</Nav.Link>
          <Nav.Link as={Link} className='navItem-2 text-center' to="/service">SERVICE</Nav.Link>
          <Nav.Link as={Link} className='navItem-2 text-center' to="/contact">CONTACT</Nav.Link>
        </Nav>
        <Nav className='btn-kontener-2'>
        <Button as={Link} to='/book' className='book-btn-2 mx-1'>BOOK NOW</Button>
        {localStorage.getItem("access_token") ? (
          <Button className='logout-btn2' onClick={handleLogout}>Logout</Button> ) : (
          <Button as={Link} to='/login' className='login-btn-2'>Account</Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  );
}