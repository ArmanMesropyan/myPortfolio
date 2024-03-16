import React from "react";
import "react-slideshow-image/dist/styles.css";
import img from "../../assets/me/me.jpg";

import "./index.scss";
import ImageComponent from "../../components/image";

const AboutMe = () => {


  return (
    <div className="G-container L-aboutMe" data-aos="unset">
      <div className="L-aboutMe-wrapper G-flex G-justify-between G-align-center G-flex-wrap">
        <div data-aos="fade-right" className="L-aboutMe-child">
          <div className="slide-container">
                    <div className="L-aboutMe-photo ">
                      <ImageComponent src={img} hash={'LAE{kfT40K000X_49Fxux^xs~U-:'} />
                    </div>
          </div>
        </div>
        <div data-aos="fade-left" className="L-aboutMe-child">
          <h5 className="L-aboutMe-title">ABOUT ME</h5>
          <p className="L-aboutMe-desc">
            Hello! I am a front-end developer with experience and a passion for
            creating amazing user interfaces. Here is some information about my
            experience and skills:
            <br />{" "}
            <span className="L-aboutMe-desc-title">Work experience:</span>{" "}
            During my work I have been involved in various projects ranging from
            small websites to large enterprise applications. My experience
            includes working with various programming languages such as HTML,
            CSS, and JavaScript, TypeScript as well as various frameworks and libraries,
            including React.js , Next.js . <br />{" "}
            <span className="L-aboutMe-desc-title">Skills: </span> I have all
            the necessary skills to create high quality user interfaces. I am
            experienced in developing responsive and cross-browser web pages,
            can work with CSS preprocessors (like Sass or Less) and have
            experience with version control systems like Git. In addition, I
            have knowledge in SEO and web application performance optimization.
            I am constantly striving to improve my skills and develop as a
            front-end developer. I am open to new challenges and ready to learn
            new technologies to stay at the forefront of web development.
          </p>
          <h6 className="L-aboutMe-proff">FRONTEND DEVELOPER </h6>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
