import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Nav, Navbar, Container, Row} from 'react-bootstrap'
const Header = () => {
  return (
    <header>
        
        <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#">Brand link</Navbar.Brand>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="light">
    <Container>
      <LinkContainer to='/'>
      <Navbar.Brand>Pro Shop</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
              <LinkContainer to='/cart'>
              <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
              <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
              </LinkContainer>
              
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <br />
    </header>
  )
}

export default Header