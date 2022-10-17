import React from 'react'
import cv from './utils/ArmanMesropyan.pdf'
import './index.scss'

const Resume = ({mouseOverEvent, mouseOutEvent}) => {
    return (
        <div className='G-container L-resume'>
            <p className='L-resume-title'>Resume</p>
            <div className="L-resume-wrapper G-flex G-justify-between G-flex-wrap G-align-center">
                <div className="L-resume-block">
                    <p className='L-resume-text'>
                        If you are interested in my candidacy,
                        you can download my resume directly
                        <br/>
                        from this site. Without registration
                        and SMS.
                    </p>

                </div>
                <div className="L-resume-block">
                    <a href={cv} download>
                        <button
                            onMouseOver={mouseOverEvent}
                            onMouseOut={mouseOutEvent}
                            className='L-resume-btn'>
                            download
                        </button>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Resume
