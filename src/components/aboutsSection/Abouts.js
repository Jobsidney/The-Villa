import React from 'react'
import Button from '../SampleMenu/Button'


function Abouts() {
  return (
    <div className="about">
        <h2>About Us</h2>
        <div className="floats">
            <img src="./assets/images/Rectangle 6.png" alt="" srcset="" width="150"/>
        </div>
        <div className="aboutSec">
            <div className="image">
                <img src={"../../images/food2.png"} alt="" width="500"/>
            </div>
            <div className="content">
                <p>
                For the past two years, DigiHotel has proved to inspire a shift within the restaurant industry and
                    beyond.<br/><br/>DigiHotel aims to serve exquisite and authentic African meals representing our cultures and
                    legendary culinary gastronomy with typical dishes with a creative and talented touch, delivering a
                    distinctly unique dining experience to fulfill our guest expectations
                </p>
                {/* <Button/> */}
                <Button  word={'Explore More'}/>
            </div>
        </div>
    </div>
  )
}

export default Abouts