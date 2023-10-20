import { useEffect } from "react";
import Cover from "./pages/HomePage/Cover/Cover";
import Header from "./layouts/Header/Header";

import Aos from "aos";
import { Container } from "react-bootstrap";
import clsx from "clsx";
import WaveBg from "./pages/HomePage/WaveBg/WaveBg";
import Section from "./components/Section/Section";
import About from "./pages/HomePage/About/About";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";

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
    <div>
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    </div>
  );
}

export default App;
