import React from "react";
import PropTypes from "prop-types";
import Marker from "../Marker/Marker";

Section.propTypes = {
  sectionTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
};

function Section({ children, title, description, sectionRef }) {
  return (
    <div
      className="px-4 px-lg-5 pt-5 mt-3 justify-content-center text-center container-lg container-fluid"
      ref={sectionRef}
    >
      {!!title && (
        <Marker>
          <h2 className="mb-5">{title}</h2>
        </Marker>
      )}
      {!!description && <p className="mb-2 mx-auto">{description}</p>}
      {children}
    </div>
  );
}

export default Section;
