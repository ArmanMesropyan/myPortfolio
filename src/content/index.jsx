import React from 'react'
import Hobby from '../components/main-page/hobby'
import Resume from '../components/main-page/resume'
import TopPage from '../components/main-page/top-page'
import Work from './../components/main-page/work/index';

const MainContent = () => {
    return (
        <>
            <TopPage/>
            <hr/>
            <Hobby/>
            <hr/>
            <Resume/>
            <hr/>
            <Work/>
        </>
    )
}
export default MainContent