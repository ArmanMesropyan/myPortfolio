import React from 'react'
import { NavLink} from 'react-router-dom'
import './index.scss'

const Header = ({mouseOverEvent, mouseOutEvent}) => {
    return (
        <div className='G-container L-header G-flex G-justify-between G-flex-wrap'>
            <div className='L-header-logo'>
                <NavLink
                    onMouseOver={mouseOverEvent}
                    onMouseOut={mouseOutEvent}
                    className='L-header--link' to='/'> Arman Mesropyan</NavLink>
            </div>
            <div>
                <ul className='L-header-links G-flex'>
                    <NavLink onMouseOver={mouseOverEvent}
                          onMouseOut={mouseOutEvent}
                          className='L-header--link' to='/Projects'>My Projects</NavLink>
                    <NavLink onMouseOver={mouseOverEvent}
                          onMouseOut={mouseOutEvent}
                          className='L-header--link' to='/Skills'>Skills</NavLink>
                    <NavLink onMouseOver={mouseOverEvent}
                          onMouseOut={mouseOutEvent}
                          className='L-header--link' to='/AboutMe'>About Me</NavLink>
                </ul>
            </div>
        </div>
    )
}
export default Header