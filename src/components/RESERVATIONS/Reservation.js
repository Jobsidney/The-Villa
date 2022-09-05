import React from 'react'
import Button from '../menu/Button'
import NavBar from '../navBar/navBar'
import reservation from './reserve.css'

function Reservation() {
  return (
    <div>
        <div className="containerTop">
        <div className='overlay'>
            <NavBar classN={"navbar"}/>
            
        </div>
        <div class="shouting">
        <div class="">Reservations</div>
        <div class="subHero">Our venues can also be booked for 
            events ranging from small, to large. The reservations must be 
            made a week in advance.
        </div>
    </div>
        </div> 
        
        
    </div>
  )
}

export default Reservation