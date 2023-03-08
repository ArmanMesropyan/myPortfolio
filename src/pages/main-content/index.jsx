import React from 'react'
import Hobby from '../main-page/hobby'
import Resume from '../main-page/resume'
import TopPage from '../main-page/top-page'
import Work from '../main-page/work';


const MainContent = ({mouseOverEvent, mouseOutEvent}) => {

    return (
        <>
            <TopPage/>
            <hr/>
            <Hobby/>
            <hr/>
            <Resume mouseOutEvent={mouseOutEvent}
                    mouseOverEvent={mouseOverEvent}/>
            <hr/>
            <Work/>
        </>
    )
}
export default MainContent