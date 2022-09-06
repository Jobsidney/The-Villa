import React from 'react'
import Button from '../SampleMenu/Button'
import Back1Svg from './Back1Svg'
import {Link} from 'react-router-dom'
function NavBar({classN}) {
  return (
      <nav>
        <label  class="logo">
          <Back1Svg/>
        </label>
        <ul class="nav-link" className={classN}>
            <li ><Link to="/">Home</Link></li>
            <li ><Link to="/home/about">About</Link></li>
            <li ><Link to="/home/menu">Menu</Link></li>
            <li ><Link to="/reservations">Reservations</Link></li>
        </ul>
        <Button classN={"login"} word={"Log In"} link={''}/>
    </nav>
  )
}

export default NavBar