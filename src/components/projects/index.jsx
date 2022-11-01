import React from 'react'
import './index.scss'
import {myProjects} from './components/projects';

const Projects = ({mouseOverEvent, mouseOutEvent}) => {

    return (
        <div className='G-container L-projects' data-aos="unset">
            <h3 className='L-projects-title' data-aos="fade-up">Projects</h3>
            <p className='L-projects-info' data-aos="fade-up">
                At the moment in the portfolio you can see the results of my test work on intensive HTML / CSS.
                JavaScript, as well as homemade layouts. Projects on React.js , TypeScript
            </p>
            <div className='L-my-projects'>
                {myProjects.map((info, index) => {
                    return (
                        <div
                            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
                            className='L-my-project G-flex G-justify-between G-flex-wrap' key={info.id}>
                            <a onMouseOver={mouseOverEvent}
                               onMouseOut={mouseOutEvent}
                               target="_blank"
                               className='L-my-project-background'
                               href={info.link} rel="noreferrer">

                                <div
                                    className='L-my-project-cover'
                                    style={{
                                        backgroundImage: `url('${info.cover}')`
                                    }}/>
                                <span className='L-my-project-cover-link icon-new-tab'
                                />
                            </a>
                            <div className='L-my-project-desc'>
                                <h4>{info.title}</h4>
                                <p>{info.description}</p>
                                <div className='L-my-project-desk-utils'>
                                    {info.skills.map((skill, index) => {
                                        return <span key={index} className={skill.x}></span>
                                    })}
                                </div>
                                <b>for download code and view please tap to button
                                    <a className='L-github-link'
                                       href={info.github}
                                       target='_blank'
                                    >
                                        <button
                                            onMouseOver={mouseOverEvent}
                                            onMouseOut={mouseOutEvent}
                                            className='L-github-link-btn'>go to github
                                        </button>
                                    </a>
                                </b>
                                <b>Tap to img for open to link WEB</b>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Projects