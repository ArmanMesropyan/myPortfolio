import React, { useEffect, useRef } from "react";
import "./style.scss";
import usePreloader from "../../hook/preloader-hook";

const PreloaderMain = () => {
  const { isLoading } = usePreloader();

  return (
    isLoading && (
      <>
        <div className="wrapper">
          <div className="typing-demo">FRONTEND DEVELOPER</div>
        </div>
      </>
    )
  );
};

export default PreloaderMain;
