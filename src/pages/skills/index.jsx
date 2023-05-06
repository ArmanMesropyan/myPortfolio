import React from 'react'
import {mySkills} from './common/skills';
import './index.scss'
import { IconHtml } from '../../assets/icons';
const Skills = () => {
    return (
        <div className='L-skills G-container' data-aos="unset">
            <h2 className='L-skills-title' data-aos="fade-up">
                What I do ?
             
            </h2>
            <p className='L-skills-paragraph' data-aos="fade-up">
                Implemented websites, mobile applications, and landing pages from concept through
                deployment.Standardized all output with a new, responsive, mobile-first approach and strategy.Assessed
                UX and UI designs for technical feasibility by using following technologies `
            </p>
            <div className='L-skills-wrapper G-flex G-justify-between G-align-center'>
                <div className='L-skills-info' data-aos="fade-up">
                    <p>Skills</p>
                </div>
                <div className='L-skills-content G-flex G-flex-wrap'>
                    {mySkills.map(languages => {
                        return <div
                            data-aos="flip-left"
                            className='L-skills-block ' key={languages.id}>
                            <div className='L-skills-img'>
                                {languages.img}
                            </div>
                            <p className='L-skills-desc'>{languages.title}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default Skills