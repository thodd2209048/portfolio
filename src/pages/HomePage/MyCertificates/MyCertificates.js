import React from "react";
import PropTypes from "prop-types";
import { certificates } from "~/utils/certificates";

MyCertificates.propTypes = {};

function MyCertificates(props) {
  const certificatesList = [certificates.metaFrontEnd];
  return (
    <>
      <div className="row py-3">
        <div
          className="col-md-6 col-sm-8 offset-md-3 offset-sm-2"
          data-aos="fade-left"
        >
          <div className="text-start">
            {certificatesList.map((item, index) => (
              <div key={index} className="row border rounded p-1">
                <div className="col-9">
                  <p className="h5">{item.name}</p>
                  <p>Issued {item.issueDate}</p>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <div className="w-100  ">
                    <img
                      className="img-fluid rounded"
                      src={item.picture.url}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCertificates;
