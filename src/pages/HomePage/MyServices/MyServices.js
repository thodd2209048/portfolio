import React from "react";
import PropTypes from "prop-types";
import ServicesImages from "~/assets/images/services/servicesImages";
import Images from "~/assets/images/Images";

MyServices.propTypes = {};

function MyServices(props) {
  const services = [
    Images.services.appDevelopment,
    Images.services.webDesign,
    Images.services.uiux,
    Images.services.graphicDesign,
  ];
  return (
    <>
      <div className="row py-3">
        {services.map((item, index) => (
          <div key={index} className="col-sm-6 col-md-3">
            <div
              className="mt-3"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <img className="my-3" src={item.src} alt={item.alt} />
              <h5 class="text-capitalize">{item.alt}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyServices;
