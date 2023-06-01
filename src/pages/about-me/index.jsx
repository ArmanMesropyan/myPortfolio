import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img from "../../assets/me/IMG-20210923-WA0003-01.jpeg";
import img2 from "../../assets/me/me.jpg";
import "./index.scss";

const AboutMe = () => {
  const slideImages = [img, img2];
  const properties = {
    duration: 3000, 
    transitionDuration: 400, 
    infinite: true, 
    indicators: false, 
    arrows: false,
    pauseOnHover: true, 
    
   
  };
  return (
    <div className="G-container L-aboutMe" data-aos="unset">
      <div className="L-aboutMe-wrapper G-flex G-justify-between G-flex-wrap">
        <div data-aos="fade-right" className="L-aboutMe-child">
          <div className="slide-container">
            <Slide {...properties}>
              {slideImages.map((image, index) => (
                <div key={index} className="each-slide">
                  <div className="L-aboutMe-photo " style={{ backgroundImage: `url(${image})` }}>
                    {/* Дополнительное содержимое для каждого слайда */}
                  </div>
                </div>
              ))}
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
