import Section from "~/components/Section/Section";
import About from "~/pages/HomePage/About/About";
import Cover from "~/pages/HomePage/Cover/Cover";
import WaveBg from "~/pages/HomePage/WaveBg/WaveBg";
import MyCertificates from "./MyCertificates/MyCertificates";
import MyServices from "./MyServices/MyServices";
import Portfolio from "./Portfolio/Portfolio";
import Skill from "./Skill/Skill";

HomePage.propTypes = {};

function HomePage({ refList }) {
  return (
    <div>
      <Cover />
      <WaveBg />
      <Section sectionRef={refList.aboutRef}>
        <About />
      </Section>
      <Section title={"My skills"} sectionRef={refList.skillRef}>
        <Skill />
      </Section>
      {/* <Section
        title="My Services"
        description="I offer services fit for any website or app. I can quickly maximize timely deliverables for real-time schemas."
      >
        <MyServices servicesRef={servicesRef} />
      </Section> */}
      <Section
        sectionRef={refList.certificatesRef}
        title="My Certificates"
        description="I am a quick learner and specialize in multitude of skills required for Web Application Development and Product Design"
      >
        <MyCertificates />
      </Section>

      <Section title="Portfolios">
        <Portfolio />
      </Section>
    </div>
  );
}

export default HomePage;
