import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Col, Container, Image, Row } from "react-bootstrap";
import programmer from "../../assets/programmer.svg";
import Aos from "aos";
import "aos/dist/aos.css";

Cover.propTypes = {};

function Cover(props) {
  return (
    <Container className="bg-light">
      <Row>
        <Col lg={6} className="border">
          <Image src={programmer} />
        </Col>
        <Col lg={6} className="border">
          <div className="mt-5">
            <p className="lead text-uppercase">Hello!</p>
            <h1
              className="fw-bold "
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="400"
            >
              I'm Tho Do Duc
            </h1>
            <p
              class="lead fw-normal mt-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Web Developer & Mobile Application Developer
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cover;
