import React, { useRef } from "react";
import PropTypes from "prop-types";

import styles from "./DefaultLayout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "~/pages/HomePage/HomePage";

DefaultLayout.propTypes = {};

function DefaultLayout(props) {
  const aboutRef = useRef();
  const servicesRef = useRef();
  const certificatesRef = useRef();
  const refList = { aboutRef, servicesRef, certificatesRef };

  const scrollToTarget = (ref) => {
    if (!ref.current) return;
    const scrollPosition = ref.current.offsetTop - 120;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };
  return (
    <div className="App bg-white">
      <Header scrollToTarget={scrollToTarget} refList={refList} />
      <HomePage refList={refList} />
      <Footer />
      <div ref={servicesRef}></div>
    </div>
  );
}

export default DefaultLayout;
