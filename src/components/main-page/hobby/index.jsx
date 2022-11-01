import React from 'react'
import './index.scss'

const Hobby = () => {
    return (
        <div className='G-container L-hobby '>
            <p className='L-hobby-title' data-aos="fade-up">
                A little about what my purposes and what I like to do.
            </p>
            <div className='L-hobby-wrapper G-flex  G-justify-between G-flex-wrap'>
                <div className='L-hobby-info ' data-aos="fade-right">
                    <h2>Purpose</h2>
                    <p>
                        Become a “senior developer”, learn as many
                        programming languages as possible, develop
                        and become an expert in programming.
                    </p>
                </div>
                <div className='L-hobby-info' data-aos="fade-left">
                    <h2>Hobby</h2>
                    <p>
                        A little about my hobbies. During my free time I like listening to music, reading fantasy and
                        historical books, watching movies, playing football, doing fitness.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Hobby