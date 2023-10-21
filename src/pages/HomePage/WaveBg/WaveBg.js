import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import clsx from "clsx";

import styles from "./WaveBg.module.scss";
import waveSvg from "~/assets/images/wave.svg";

WaveBg.propTypes = {};

function WaveBg(props) {
  return (
    <div>
      <Container fluid>
        <div
          className={clsx(styles.waveBg)}
          style={{
            backgroundImage: `url(${waveSvg})`,
          }}
        ></div>
      </Container>
    </div>
  );
}

export default WaveBg;
