import React from "react";
import PropTypes from "prop-types";
import Cover from "~/pages/HomePage/Cover/Cover";
import WaveBg from "~/pages/HomePage/WaveBg/WaveBg";
import Section from "~/components/Section/Section";
import About from "~/pages/HomePage/About/About";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div>
      <Cover />
      <WaveBg />
      <Section>
        <About />
      </Section>
      <div style={{ height: "3000px" }}></div>
    </div>
  );
}

export default HomePage;
