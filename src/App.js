import { useEffect } from "react";

import Aos from "aos";
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
