import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import SocialNav from "../SocialNav/SocialNav";
import { SymbolArrowRight, symbolArrowRight } from "~/utils/symbols";

import programmer from "../../assets/programmer.svg";
import styles from "./Cover.module.scss";
import clsx from "clsx";

Cover.propTypes = {};

function Cover(props) {
  return (
    <div className="bg-altlight">
      <Container>
        <Row>
          <Col lg={6}>
            <Image src={programmer} />
          </Col>
          <Col lg={6}>
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

              <SocialNav />

              <Button
                className="btn btn-primary rounded-pill mt-4 px-3 fw-semibold"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Get In Touch <SymbolArrowRight />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cover;
