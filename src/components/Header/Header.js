import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row, Container, Navbar, Nav } from "react-bootstrap";
import clsx from "clsx";

import styles from "./Header.module.scss";

Header.propTypes = {};

function Header(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        // document.body.style.paddingTop = `${navbarRef.current.offsetHeight}px`;
      } else {
        setIsScrolled(false);
        // document.body.style.paddingTop = "0px";
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shadowNavBar = isScrolled
    ? "shadow-sm bg-white fixed-top"
    : "bg-altlight";
  const navBarPadding = isScrolled ? "py-1" : "py-3";

  return (
    <div className={clsx(styles.header, shadowNavBar)}>
      <Navbar
        expand="lg"
        className={clsx(navBarPadding, "justify-content-between fw-bold")}
        role="navigation"
        ref={navbarRef}
      >
        <div className="container-lg container-fluid">
          <Navbar.Brand>Tho Do Duc</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Services</Nav.Link>
              <Nav.Link>Skills</Nav.Link>
              <Nav.Link>Portfolio</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
