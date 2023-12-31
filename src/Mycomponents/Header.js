import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
 
  return (
    <header className="bg-body-tertiary p-1" >
    <Navbar >
    
      <Navbar.Brand href="#home">Schedule Page</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>                  
        </Nav>
        <Navbar.Text>
            made by: <a href="https://nitinpatel11.github.io/MyPortfolio/" target="_blank">Nitin Patel</a>
          </Navbar.Text>        
      </Navbar.Collapse>
    
  </Navbar>
  </header>
  )
}

