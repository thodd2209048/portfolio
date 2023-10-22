import clsx from "clsx";
import { Container } from "react-bootstrap";

import waveSvg from "~/assets/images/wave.svg";
import styles from "./WaveBg.module.scss";

WaveBg.propTypes = {};

function WaveBg(props) {
  return (
    <>
      <div className="container-fluid bg-white p-0">
        <div
          className={clsx(styles.waveBg)}
          style={{
            backgroundImage: `url(${waveSvg})`,
          }}
        ></div>
      </div>
    </>
  );
}

export default WaveBg;
