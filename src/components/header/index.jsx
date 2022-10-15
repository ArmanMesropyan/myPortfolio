import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
const Header = () => {
  return (
    <div className='G-container L-header G-flex G-justify-between G-flex-wrap'>
      <div className='L-header-logo'>
        <NavLink className='L-header--link' to='/'> Arman Mesropyan</NavLink>
      </div>
      <div>
        <ul className='L-header-links G-flex'>
          <Link className='L-header--link' to='/Projects'>My Projects</Link>
          <Link className='L-header--link' to='/Skills'>Skills</Link>
          <Link className='L-header--link' to='/AboutMe'>About Me</Link>
        </ul>
      </div>
    </div>
  )
}
export default Header