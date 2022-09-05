import React from 'react'
import Button from '../menu/Button'
import Back1Svg from './Back1Svg'

function NavBar({classN}) {
  return (
      <nav>
        <label  class="logo">
          <Back1Svg/>
        </label>
        <ul class="nav-link" className={classN}>
            <li ><a href="#home">Home</a></li>
            <li ><a href="#about">About</a></li>
            <li ><a href="#home">Menu</a></li>
            <li ><a href="#home">Reservations</a></li>
        </ul>
        <Button classN={"login"} word={"Log In"} link={''}/>
    </nav>
  )
}

export default NavBar