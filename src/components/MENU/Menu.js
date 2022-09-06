import React from 'react'
import Button from '../menu/Button'
import QuickDrinks from './cocktails/QuickDrinks'
import Dessert from './Desserts/Dessert'
import Lunch from './Lunch/Lunch'
import menu from './menu.css'
function Menu() {
 


  return (
    <div class="main-menu">

<div class="main-links">
    <h4>The Digi Main Menu</h4>
    <h1>Today's Special</h1>
    <div class="links">
        <ul>
            <li><a href="../../index.html" className="home">Home</a></li>
            <li><a href="/" className="active">Quick</a></li>
            <li><a href="../components/breakfast/breakfast.html">Breakfast</a></li>
            <li><a href="../components/lunch/lunch.html">Lunch</a></li>
            <li><a href="../components/dinner/dinner.html">Dinner</a></li>
            <li><a href="../components/dessert/dessert.html">Dessert</a></li>
        </ul>
        <div className="button">
            <Button word={'Book a dish'}/>
        </div>
    </div>
</div>
{/* <QuickDrinks/> */}
{/* <Lunch/> */}
<Dessert/>
</div>
  )
}

export default Menu