import React from 'react';
import './style.scss';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation3() {
  return (
      <>
      <Navbar className='navbar-3' fixed='top'>
        <Container className='container-3' fluid>
          <Navbar.Brand className='brand-3' as={Link} to="/">
            <span>
              <img src={require('../../materials/octagon.png')} alt='octagon' className='octagon-3'/>
              AirCon
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>
  );
}
