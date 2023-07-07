import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Blurhash } from "react-blurhash";
import { GridLoader } from "react-spinners";
import "./style.scss";
const ImageComponent = ({ src, hash }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoaded ? (
        <div className="L-photo-component">
          <Blurhash
            hash={hash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
          <div className="L-my-project-loading-spinner">
            <GridLoader loading={!imageLoaded} color="#fff" />
          </div>
        </div>
      ) : (
        <img src={src} alt="image" className="L-my-project-img" />
      )}
    </>
  );
};

export default ImageComponent;
