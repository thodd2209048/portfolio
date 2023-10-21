import React from "react";
import PropTypes from "prop-types";

Section.propTypes = {
  sectionTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
};

function Section({ children, title, description }) {
  return (
    <div className="px-4 px-lg-5 pt-5 mt-3 justify-content-center text-center container-lg container-fluid">
      {!!title && <h2 className="mb-3">{title}</h2>}
      {!!description && <p className="mb-2 mx-auto">{description}</p>}
      {children}
    </div>
  );
}

export default Section;
