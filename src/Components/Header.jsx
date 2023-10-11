import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <div>
        <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">RestroApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header