import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../src/assets/style/index.scss";
import Cursor from "./utils/cursor";
import PreloaderMain from "./utils/preloader-main";
import usePreloader from "./hook/preloader-hook";
const App = () => {
  const { isLoading } = usePreloader();

  useEffect(() => {
    AOS.init();
  }, []);

  if (isLoading) {
    return <PreloaderMain />;
  }

  return (
    <div className="P-App">
      <Cursor />
    </div>
  );
};
export default App;
