import { useEffect } from "react";
import Cover from "./components/Cover/Cover";
import Header from "./components/Header/Header";

import "aos/dist/aos.css";
import Aos from "aos";

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
    <div className="App bg-light">
      <Header />
      <Cover />
    </div>
  );
}

export default App;
