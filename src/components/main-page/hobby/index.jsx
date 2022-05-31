import React from 'react'
import './index.scss'
const Hobby = () => {
    return (
        <div className='G-container L-hobby ' >
            <p className='L-hobby-title'>a little about what my purpose is and what I like to do</p>
            <div className='L-hobby-wrapper G-flex  G-justify-between G-flex-wrap'>
                <div className='L-hobby-info '>
                    <h2>Purpose</h2>
                    <p>
                        Become a "senior developer", learn as many programming languages as possible,
                        develop and become an expert in programming
                    </p>
                </div>
                <div className='L-hobby-info'>
                    <h2>Hobby</h2>
                    <p>
                        A little about my hobby.
                        free time i like to listen to music.
                        I like reading fantasy or historical books or watch films,
                        play football , do fitness.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Hobby