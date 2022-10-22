import React from 'react'
import Hobby from '../components/main-page/hobby'
import Resume from '../components/main-page/resume'
import TopPage from '../components/main-page/top-page'
import Work from './../components/main-page/work/index';
import Preloader from "../utils/preloader";
import usePreloaderPath from "../hook/preloader-path";

const MainContent = ({mouseOverEvent, mouseOutEvent}) => {
    const {loading} = usePreloaderPath()
    if (loading) {
        return <Preloader/>
    }
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