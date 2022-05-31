/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line jsx-a11y/anchor-has-content
import React from 'react'
import './index.scss'
const Footer = () => {
    return (
        <div className='L-footer'>
            <div className="G-container L-footer-contacts">
                <h2 className='L-footer-contacts-title'>CONTACTS</h2>
                <div className="L-footer-contacts-info">
                    <span>Email:</span>
                    <a href="#">mesropyanarman21@gmail.com</a>
                </div>
                <div className='L-footer-contacts-info'>
                    <span>Phone:</span>
                    <a href="tel:+37493142243">+37493142243</a>
                    <a href="tel:++37495142240">+37495142240</a>
                </div>
            </div>
            <div className="G-container L-footer-links">
                <ul className='L-footer-links-parent G-flex G-flex-wrap'>
                    <li className='L-footer-link'>
                        <a href="https://www.facebook.com/arman.mesropyan.35/" target="_blank" rel="noreferrer">
                            <span className='icon-facebook'></span>
                        </a>
                    </li>
                    <li className='L-footer-link'>
                        <a href="https://www.instagram.com/__mesropyan__a/" target="_blank" rel="noreferrer">
                            <span className='icon-instagram1'></span>
                        </a>
                    </li>
                    <li className='L-footer-link'>
                        <a href="https://t.me/Arm033" target="_blank" rel="noreferrer">
                            <span className='icon-telegram'></span>
                        </a>
                    </li>
                    <li className='L-footer-link'>
                        <a href="https://github.com/ArmanMesropyan" target="_blank" rel="noreferrer">
                            <span className='icon-github'></span>
                        </a>
                    </li>
                    <li className='L-footer-link'>
                        <a href="https://www.linkedin.com/in/armanmesropyan/" target="_blank" rel="noreferrer">
                            <span className='icon-linkedin'></span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}
export default Footer