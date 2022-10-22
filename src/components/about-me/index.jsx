import React from 'react'
import img from '../../assets/me/IMG-20210923-WA0003-01.jpeg'
import './index.scss'
import Preloader from "../../utils/preloader";
import usePreloaderPath from "../../hook/preloader-path";

const AboutMe = () => {
    const {loading} = usePreloaderPath()
    if (loading) {
        return <Preloader/>
    }
    return (
        <div className='G-container L-aboutMe' data-aos="unset">
            <div className="L-aboutMe-wrapper G-flex G-justify-between G-flex-wrap">
                <div data-aos="fade-right" className='L-aboutMe-child'>
                    <div
                        className="L-aboutMe-photo"
                        style={{
                            backgroundImage: `url('${img}')`
                        }}
                    ></div>
                </div>
                <div data-aos="fade-left" className='L-aboutMe-child'>
                    <h5 className='L-aboutMe-title'>ABOUT ME</h5>
                    <p className='L-aboutMe-desc'>
                        I have completed the course last year and currently working as a junior front-end developer.
                        The main responsibilities of my work include the layout of sites and landing pages, writing
                        scripts in JS.
                        I mostly work with React JS , TypeScript developing a user interfaces,
                        creating a responsive apps and
                        functional applications,single-page applications:
                        Also I create HTML pages of the site based on design layouts.
                        I am engaged in binding to the user interface of scripts that provide visualization
                        and animation of the site pages.
                    </p>
                    <h6 className='L-aboutMe-proff'>FRONTEND DEVELOPER </h6>
                </div>
            </div>
        </div>

    )
}
export default AboutMe