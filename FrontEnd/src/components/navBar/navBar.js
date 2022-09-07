import React from 'react'
import Button from '../SampleMenu/Button'
import Back1Svg from './Back1Svg'
import {Link } from 'react-router-dom'
import { HashLink as NavLink } from 'react-router-hash-link';
function NavBar({classN}) {
  return (
      <nav>
        <label  className="logo">
          <Back1Svg/>
        </label>
        <ul class={classN} >
            <li ><Link to="/">Home</Link></li>
            <li ><a to="#about">About</a></li>
            <li ><a to="#menu">Menu</a></li>
            <li ><Link to="/reservations">Reservations</Link></li>
        </ul>
        <a  to="/login"><Link to="/login"><Button  word={"Log In"} ></Button></Link></a>
    </nav>
  )
}

export default NavBar