import React from "react";
import PropTypes from "prop-types";
import Cover from "~/pages/HomePage/Cover/Cover";
import WaveBg from "~/pages/HomePage/WaveBg/WaveBg";
import Section from "~/components/Section/Section";
import About from "~/pages/HomePage/About/About";
import MyServices from "./MyServices/MyServices";
import MyCertificates from "./MyCertificates/MyCertificates";

HomePage.propTypes = {};

function HomePage({ refList }) {
  const { aboutRef, servicesRef, certificatesRef } = refList;
  return (
    <div>
      <Cover />
      <WaveBg />
      <Section>
        <About aboutRef={aboutRef} />
      </Section>
      <Section
        title="My Services"
        description="I offer services fit for any website or app. I can quickly maximize timely deliverables for real-time schemas."
      >
        <MyServices />
      </Section>
      <Section
        title="My Certificates"
        description="I am a quick learner and specialize in multitude of skills required for Web Application Development and Product Design"
      >
        <MyCertificates />
      </Section>
    </div>
  );
}

export default HomePage;
