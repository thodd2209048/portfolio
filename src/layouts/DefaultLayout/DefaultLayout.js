import { useRef } from "react";

import HomePage from "~/pages/HomePage/HomePage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

DefaultLayout.propTypes = {};

function DefaultLayout(props) {
  const aboutRef = useRef();
  const skillRef = useRef();
  const servicesRef = useRef();
  const certificatesRef = useRef();
  const refList = { aboutRef, skillRef, servicesRef, certificatesRef };

  const scrollToTarget = (ref) => {
    if (!ref.current) return;
    // ref.current.scrollIntoView();
    const scrollPosition = ref.current.offsetTop - 80;
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
