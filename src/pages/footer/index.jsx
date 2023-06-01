import React from "react";
import "./index.scss";
import {
  IconLinkedin,
  IconGithub,
  IconTelegram,
  IconInstagram,
  IconFacebook,
  IconPhone,
  IconMail,
} from "../../assets/icons/index";

const Footer = ({ mouseOverEvent, mouseOutEvent }) => {
  return (
    <div className="L-footer">
      <div className="G-container L-footer-contacts">
        <h2 className="L-footer-contacts-title">CONTACTS</h2>
        <div className="L-footer-contacts-info G-flex G-align-center G-justify-center">
          <span>
            <IconMail />
          </span>
          <div className="L-footer-contact-info-container">
            <a
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              href="mailto:mesropyanarman21@gmail.com"
            >
              mesropyanarman21@gmail.com
            </a>
          </div>
        </div>
        <div className="L-footer-contacts-info G-flex G-align-center G-justify-center">
          <span>
            <IconPhone />
          </span>
          <div className="L-footer-contact-info-container">
            <a
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              href="tel:+37493142243"
            >
              +37493142243
            </a>
            <a
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              href="tel:++37495142240"
            >
              +37495142240
            </a>
          </div>
        </div>
      </div>
      <div className="G-container L-footer-links">
        <ul className="L-footer-links-parent G-flex G-flex-wrap">
          <li className="L-footer-link">
            <a
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              href="src/pages/footer/index"
              target="_blank"
              rel="noreferrer"
            >
              <IconFacebook />
            </a>
          </li>
          <li className="L-footer-link">
            <a
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              href="src/pages/footer/index"
              target="_blank"
              rel="noreferrer"
            >
              <IconInstagram />
            </a>
          </li>
          <li className="L-footer-link">
            <a
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              href="https://t.me/Arm033"
              target="_blank"
              rel="noreferrer"
            >
              <IconTelegram />
            </a>
          </li>
          <li className="L-footer-link">
            <a
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              href="https://github.com/ArmanMesropyan"
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub />
            </a>
          </li>
          <li className="L-footer-link">
            <a
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              href="src/pages/footer/index"
              target="_blank"
              rel="noreferrer"
            >
              <IconLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
