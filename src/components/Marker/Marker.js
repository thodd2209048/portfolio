import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Marker.module.scss";

Marker.propTypes = {
  children: PropTypes.node,
};

function Marker({ children }) {
  return (
    <span className={clsx(styles.marker, styles.markerCenter)}>{children}</span>
  );
}

export default Marker;
