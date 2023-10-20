import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Container, Navbar, Nav } from "react-bootstrap";

Header.propTypes = {};

function Header(props) {
  return (
    <>
      <Container className="py-3">
        <Navbar
          expand="lg"
          className="bg-body-tertiary border justify-content-between fw-bold p-2"
        >
          <Navbar.Brand>Tho Do Duc</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav ms-auto">
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Services</Nav.Link>
              <Nav.Link>Skills</Nav.Link>
              <Nav.Link>Portfolio</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default Header;
