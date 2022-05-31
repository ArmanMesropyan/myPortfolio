import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainContent from './../content/index';
import AboutMe from './../components/about-me/index';
import Skills from './../components/skills/index';
import Projects from './../components/projects/index';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/AboutMe' element={<AboutMe />} />
      </Routes>
    </>
  )
}
export default Router 