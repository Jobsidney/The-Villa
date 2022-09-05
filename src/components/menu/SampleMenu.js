import React from 'react'
import Button from './Button'

function SampleMenu() {
  return (
    <div className="menu">
    <h1>
        We offer a top Notch Menu
    </h1>

    <div className="container">
        <div className="container1">
            <img src="/src/images/burger.png" alt="Burger image"/>
            <h4>Breakfast</h4>
            <p>An excellent way to make any breakfast event memorable is to add a made-to-order breakfast station
                that incorporates fresh ingredients. </p>
                <Button word={'Expore More'}/>
        </div>
        <div className="container1">
            <img src="/src/images/dessert.png" alt="Dessert image"/>
            <h4>Desserts</h4>
            <p>Ordering an appetizer rather than an entree can be the answer to enjoying restaurant meals without
                busting your calorie budget. </p>
                <Button word={'Expore More'}/>
        </div>
        <div className="container1">
            <img src="/src/images/appetizer2.png" alt="Appetizer image"/>
            <h4>Appetizers</h4>
            <p>Ordering an appetizer rather than an entree can be the answer to enjoying restaurant meals without
                busting your calorie budget.</p>
                <Button word={'Expore More'}/>
        </div>

    </div>
    <Button word={"Explore Menu"} classN={'btn'}/>
    <div className="empty"></div>
    </div>

  )
}

export default SampleMenu