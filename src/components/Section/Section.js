import React from "react";
import PropTypes from "prop-types";

Section.propTypes = {
  sectionTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

function Section({ children, sectionTitle }) {
  return (
    <div className="px-4 px-lg-5 pt-5">
      {!!sectionTitle && <h1>{sectionTitle}</h1>}
      {children}
    </div>
  );
}

export default Section;
