import React from 'react'
import './index.scss'
import { myProjects } from './components/projects';

const Projects = () => {
    return (
        <div className='G-container L-projects'>
            <h3 className='L-projects-title'>Projects</h3>
            <p className='L-projects-info'>
            At the moment in the portfolio you can see the results of my test work on intensive HTML / CSS. JavaScript, as well as homemade layouts. Projects on React.js
            </p>
            <div className='L-my-projects'>
                {myProjects.map(info => {
                    return (
                        <div className='L-my-project G-flex G-justify-between G-flex-wrap' key={info.id}>
                            <a
                                target="_blank"
                                className='L-my-project-background'
                                href={info.link} rel="noreferrer">
                                <div
                                    className='L-my-project-cover'
                                    style={{
                                        backgroundImage: `url('${info.cover}')`
                                    }} />
                                <span className='L-my-project-cover-link icon-new-tab'
                               />
                            </a>
                            <div className='L-my-project-desc'>
                                    <h4>{info.title}</h4>
                                    <p>{info.description}</p>
                                    <div className='L-my-project-desk-utils'>
                                        <span className={info.skills.react}/>
                                        <span className={info.skills.scss}/>
                                    </div>
                                    <b>Tap to img for open to link</b>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Projects