import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img from "../../assets/me/IMG-20210923-WA0003-01.jpeg";
import img2 from "../../assets/me/me.jpg";
import imgSmall from "../../assets/me/small/me_2_small.jpg";
import imgSmall2 from "../../assets/me/small/me_1_small.jpg";
import "./index.scss";
import { useState } from "react";
import { GridLoader } from 'react-spinners';

const AboutMe = () => {
  const slideImages = [
    { id: 1, img: img, imgSmall: imgSmall },
    { id: 2, img: img2, imgSmall: imgSmall2 },
  ];
  const properties = {
    duration: 5000,
    transitionDuration: 400,
    infinite: true,
    indicators: false,
    arrows: false,
    pauseOnHover: true,
  };
  const [projectImagesLoaded, setProjectImagesLoaded] = useState([]);
  const [imgSpinner, setImageSpinner] = useState(true);
  const handleImageLoad = (projectId) => {
    setTimeout(() => {
      setProjectImagesLoaded((prevLoaded) => [...prevLoaded, projectId]);
    }, 1000);
  };

  return (
    <div className="G-container L-aboutMe" data-aos="unset">
      <div className="L-aboutMe-wrapper G-flex G-justify-between G-flex-wrap">
        <div data-aos="fade-right" className="L-aboutMe-child">
          <div className="slide-container">
            <Slide {...properties}>
              {slideImages.map((image, index) => {
                const isImageLoaded = projectImagesLoaded.includes(image.id);
                return (
                  <div key={image.id} className="each-slide">
                    <div className="L-aboutMe-photo ">
                      {isImageLoaded ? (
                        <img
                          src={image.img}
                          alt="project cover"
                          loading="lazy"
                          className="L-my-project-img"
                          onLoad={()=> setImageSpinner(false)}
                        />
                      ) : (
                        <div className="L-my-project-loading-wrapper">
                          <img
                            className="L-my-project-img-blur"
                            src={image.imgSmall}
                            alt="placeholder"
                            onLoad={() => handleImageLoad(image.id)}
                            style={{
                              filter: "blur(10px)",
                              transition: "filter 0.3s ease",
                            }}
                          />
                          {imgSpinner && (
                            <div className="L-my-project-loading-spinner">
                              <GridLoader loading={imgSpinner} color="#fff" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </Slide>
          </div>
        </div>
        <div data-aos="fade-left" className="L-aboutMe-child">
          <h5 className="L-aboutMe-title">ABOUT ME</h5>
          <p className="L-aboutMe-desc">
            The main responsibilities of my work include the layout of sites and
            landing pages, writing scripts in JS. I mostly work with React JS ,
            TypeScript developing a user interfaces, creating a responsive apps
            and functional applications,single-page applications: Also I create
            HTML pages of the site based on design layouts. I am engaged in
            binding to the user interface of scripts that provide visualization
            and animation of the site pages.
          </p>
          <h6 className="L-aboutMe-proff">FRONTEND DEVELOPER </h6>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
