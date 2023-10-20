import React from "react";
import PropTypes from "prop-types";

Section.propTypes = {};

function Section({ children }) {
  return <div className="px-4 px-lg-5 pt-5">{children}</div>;
}

export default Section;
