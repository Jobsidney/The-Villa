import React from 'react'
import Button from '../SampleMenu/Button'
import BreakFast from './Breakfast/BreakFast'
import QuickDrinks from './cocktails/QuickDrinks'
import Dessert from './Desserts/Dessert'
import Lunch from './Lunch/Lunch'
import menu from './menu.css'
import { BrowserRouter,Route,Routes,Link,Outlet} from "react-router-dom";

function Menu() {
 


  return (
    <div class="main-menu">

<div class="main-links">
    <h4>The Villa Main Menu</h4>
    <h1>Today's Special</h1>
    <div class="links">
        <ul>
            <li><Link to="/" className="home">Home</Link></li>
            <li><Link to="quickDrinks/" className="">Quick</Link></li>
            <li><Link to="breakfast">Breakfast</Link></li>
            <li><Link to="lunchDinner">Lunch/ Dinner</Link></li>
            <li><Link to="desserts">Dessert</Link></li>
        </ul>
        <div className="button">
            <Button word={'Book a dish'}/>
        </div>
    </div>
</div>
<Outlet></Outlet>     

</div>
  )
}

export default Menu