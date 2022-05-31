import React from 'react'
import './index.scss'
const Education = () => {
    return (
        <div className='G-container L-education-wrapper' >
            <h1 className='L-education-title-all'>Education</h1>
            <div className='L-education G-flex G-justify-between G-flex-wrap' >
                <div className='L-education-child'>
                    <h2 className='L-education-title'>
                        SMART CODE
                    </h2>
                    <h3 className='L-education-spec'>Frontend development </h3>
                    <h4 className='L-education-time'>Jan. 2021 - Jul. 2021</h4>
                    <p className='L-education-desc'>
                        From January to July I took courses in web programming on
                        Smart Code institution. I studied web programming there, I
                        started with HTML/CSS, Sass/Less preprocessors, started
                        learning Javascript and after that React.js.
                    </p>
                </div>
                <div className='L-education-child'>
                    <h2 className='L-education-title'>
                        YERVAN STATE COLLEGE OF INFORMATICS
                    </h2>
                    <h3 className='L-education-spec'>Secondary specialized education </h3>
                    <h4 className='L-education-time'>Sep. 2014 - May 2018</h4>
                    <p className='L-education-desc'>
                        I was studying to be a computer programmer at the College of
                        Computer Science from 2014-2018, after schooleducation
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Education