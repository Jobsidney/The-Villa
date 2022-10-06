import React from 'react'
import Button from '../SampleMenu/Button'
import Back1Svg from './Back1Svg'
import {Link } from 'react-router-dom'
function NavBar({classN}) {
  return (
      <nav className='deactivate'>
        <label  className="logo">
          <Back1Svg/>
        </label>
        <ul class={classN} >
            <li ><Link to="/">Home</Link></li>
            <li ><Link to="#about">About</Link></li>
            <li ><Link to="/menu">Menu</Link></li>
            <li ><Link to="/reservations">Reservations</Link></li>
        </ul>
        <Link to="/login"><Button  word={"Log In"} ></Button></Link>
    </nav>
  )
}

export default NavBar