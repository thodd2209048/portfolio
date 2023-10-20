import { useEffect } from "react";
import Cover from "./components/Cover/Cover";
import Header from "./components/Header/Header";

import Aos from "aos";
import { Container } from "react-bootstrap";
import clsx from "clsx";
import WaveBg from "./components/WaveBg/WaveBg";
import Section from "./components/Section/Section";
import About from "./components/About/About";

function App() {
  useEffect(() => {
    Aos.init({
      anchorPlacement: "top-left",
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="App bg-white">
      <Header />
      <Cover />
      <WaveBg />
      <Section>
        <About />
      </Section>
      <div style={{ height: "3000px" }}></div>
    </div>
  );
}

export default App;
