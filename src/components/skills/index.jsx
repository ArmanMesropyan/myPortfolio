import React from 'react'
import { mySkills } from './common/skills';
import './index.scss'
const Skills = () => {
    const skillStars = (stars, full, empty , half) => {
        if (stars === 5) {
            return (
                <>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={full}></span>
                </>

            )
        }
        else if(stars === 4.5){
            return (
                <>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={half}></span>
                </>
            )
        }
        else if (stars === 4) {
            return (
                <>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={empty}></span>
                </>
            )
        }
        else if (stars === 3.5) {
            return (
                <>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={half}></span>
                    <span className={empty}></span>
                </>
            )
        }
        else if (stars === 3) {
            return (
                <>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={full}></span>
                    <span className={empty}></span>
                    <span className={empty}></span>
                </>
            )
        }
    }
    return (
        <div className='L-skills G-container'>
            <h2 className='L-skills-title'>
                What i Do
            </h2>
            <p className='L-skills-paragraph'>
                Implemented websites, mobile applications, and landing pages from concept through deployment.Standardized all output with a new, responsive, mobile-first approach and strategy.Assessed UX and UI designs for technical feasibility by using following technologies `
            </p>
            <div className='L-skills-wrapper G-flex G-justify-between G-align-center'>
                <div className='L-skills-info'>
                    <p>Skills</p>
                </div>
                <div className='L-skills-content G-flex G-flex-wrap'>
                    {mySkills.map(languages => {
                        return <div className='L-skills-block ' key={languages.id}>
                            <div className='L-skills-img'>
                                <span className={languages.img} />
                            </div>
                            <p className='L-skills-desc'>{languages.title}</p>
                            <div className='L-skills-starts'>
                                {skillStars(
                                    languages.stars,
                                    languages.starFull,
                                    languages.starEmpty,
                                    languages.starHalf)}

                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default Skills