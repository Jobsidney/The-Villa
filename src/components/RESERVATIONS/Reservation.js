import React from 'react'
import Footer from '../footer/Footer'
import Button from '../SampleMenu/Button'
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
                <div class="hero2">Reservations</div>
                <div class="subHero">Our venues can also be booked for 
                events ranging from small, to large. The reservations must be 
                made a week in advance.
                </div>
            </div>
            <Footer footer={'footer2'}/>
        </div> 
        
        
    </div>
  )
}

export default Reservation