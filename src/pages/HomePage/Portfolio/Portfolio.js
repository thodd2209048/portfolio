import React from "react";
import PropTypes from "prop-types";
import { portfolio } from "~/utils/portfolio";
import Masonry from "react-masonry-css";
import clsx from "clsx";

import styles from "./Portfolio.module.scss";

Portfolio.propTypes = {};

function Portfolio(props) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <div className="row">
        <div className="col">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={clsx(styles.portfolioGrid)}
            columnClassName={clsx(styles.portfolioGridColumn)}
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            {portfolio.map((item, index) => (
              <div key={index} className={clsx(styles.gridItem)}>
                <a href={item.url} target="blank">
                  <figure className={clsx(styles.portfolioItem)}>
                    <img src={item.img.url} alt="" />
                    <figcaption>
                      <h5 className="text-uppercase mb-0 mt-2">{item.skill}</h5>
                      <p className="text-capitalize mb-2">{item.name}</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
