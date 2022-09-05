import React from 'react'
import Back1Svg from './Back1Svg'

function NavBar() {
  return (
    <div>
      <nav>
        <label  class="logo">
          <Back1Svg/>
        </label>
        <ul class="nav-link">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#home">Menu</a></li>
            <li><a href="#home">Reservations</a></li>
        </ul>
        <button class="login"><a href="./assets/html/login.html">Log In</a></button>
    </nav>
    </div>
  )
}

export default NavBar