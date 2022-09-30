import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const login = () => {
    localStorage.setItem("token", "token");
  };
  const token = localStorage.getItem("token");

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/users'>
            Users
          </Nav.Link>
        </Nav>
        <Button variant='outline-secondary' onClick={login}>
          {token ? "Logout" : "Login"}
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
