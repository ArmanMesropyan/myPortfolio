import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MainContent from '../pages/main-content';
import AboutMe from '../pages/about-me/index';
import Skills from '../pages/skills/index';
import Projects from '../pages/projects/index';
import usePreloaderPath from "../hook/preloader-path";
import Preloader from "../utils/preloader";

const Router = ({mouseOverEvent, mouseOutEvent}) => {

    const {loading} = usePreloaderPath()
    if (loading) {
        return <Preloader/>
    }
    return (
        <>
            <Routes>
                <Route path='/' element={<MainContent
                            mouseOutEvent={mouseOutEvent}
                            mouseOverEvent={mouseOverEvent}/>}/>
                <Route path='/Projects'
                       element={<Projects
                           mouseOutEvent={mouseOutEvent}
                           mouseOverEvent={mouseOverEvent}/>}/>
                <Route path='/Skills' element={<Skills/>}/>
                <Route path='/AboutMe' element={<AboutMe/>}/>
            </Routes>
        </>
    )
}
export default Router 