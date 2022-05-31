import React from 'react'
import './index.scss'
import arman from '../../../assets/me/PicsArt_05-06-07.18.34.jpg'
const TopPage = () => {
    return (
        <div className='G-container L-main-top'>
            <div className='L-top-title'>
                <h1>Hi, i'm <span>Arman</span></h1>
                <h3>Frontend Developer</h3>
            </div>
            <div className='L-top-my-photo'>
                <div className='L-top-me'
                style={{
                    backgroundImage:`url('${arman}')`
                }}
                />
            </div>
        </div>
    )
}
export default TopPage
