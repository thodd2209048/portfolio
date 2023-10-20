import React from "react";
import PropTypes from "prop-types";

import styles from "./DefaultLayout.module.scss";
import Header from "../Header/Header";

DefaultLayout.propTypes = {};

function DefaultLayout({ children }) {
  return (
    <div className="App bg-white">
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;
