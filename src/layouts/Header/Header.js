import clsx from "clsx";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

import styles from "./Header.module.scss";

Header.propTypes = {
  scrollToTarget: PropTypes.func,
  refList: PropTypes.object,
};

function Header({ scrollToTarget, refList }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  const { aboutRef, skillRef, servicesRef, certificatesRef } = refList;

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
              <Button
                className="btn-primary me-2 fw-bold"
                onClick={() => scrollToTarget(aboutRef)}
              >
                About
              </Button>
              <Button
                className="btn-primary me-2 fw-bold"
                onClick={() => {
                  scrollToTarget(skillRef);
                }}
              >
                Skills
              </Button>
              <Button
                className="btn-primary me-2 fw-bold"
                onClick={() => scrollToTarget(certificatesRef)}
              >
                Certificates
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
