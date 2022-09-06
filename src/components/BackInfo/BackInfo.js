import React from 'react'
import Button from '../SampleMenu/Button'


function BackInfo() {
  return (
    <div>
     <div className="hero" id="home">
        <div className="heroSec">
            <div className="content">
                <h1>The flavors of life are just a bite away</h1>
                <p>We ought to be about something beyond moving chicken. We ought to be a piece of our client’s lives
                    and the networks in which we serve.</p>
                <Button word={'Explore More'}/>
            </div>
            <div className="image">
                <img src={"../../images/supa-removebg-preview.png"} alt="" width="900"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BackInfo