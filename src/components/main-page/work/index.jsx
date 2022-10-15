import React, {useEffect, useState} from 'react'
import './index.scss'
import Experience from './components/experience/index';

const Work = () => {

    let LENGTH = 168
    const [arr, setArr] = useState(Array.from({length: LENGTH}, (_, idx) => ({id: idx + 1, active: false})))
    const date = '2022-01-01T00:00:00.000Z'
    let currentDate = Date.parse(new Date());
    let days = ((currentDate - Date.parse(date)) / 86400000);
    let weeks = ((currentDate - Date.parse(date)) / 86400000 / 7);
    let month = Math.trunc(weeks / 4)
    useEffect(() => {
        let newState = []
        arr.map(item => {
            if (item.id <= weeks) {
                newState.push({...item, active: true})
            } else {
                newState.push({...item})
            }
        })
        setArr([...newState])
    }, [])

    return (
        <div className='G-container L-work G-flex G-justify-between G-flex-wrap'>
            <div className='L-work-child'>
                <p className='L-work-title'>This is my work experience timeline, each cube is equal to 1 week.</p>
                <p className='L-work-time-days'>I'm already working on real
                    projects <span>{Math.trunc(days)}</span> days (<span>{month}</span> months)
                </p>
                <div className="L-work-cub-wrapper">
                    {arr.map(cub => {
                        return <div className={cub.active ? 'L-workCub' : 'L-workCubFalse'} key={cub.id}></div>
                    })}
                </div>
            </div>
            <div className='L-work-child'>
                <Experience/>
            </div>
        </div>
    )
}

export default Work