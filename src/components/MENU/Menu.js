import React from 'react'
import NavBar from '../navBar/navBar'
import Cocktail from './cocktails/Cocktail'
import menu from './menu.css'
function Menu() {
  return (
    <div>
           <div class="main-menu">

<div class="main-links">
    <h4>The Digi Main Menu</h4>
    <h1>Today's Special</h1>
    <div class="links">
        <ul>
            <li><a href="../../index.html" class="home">Home</a></li>
            <li><a href="/" class="active">Quick</a></li>
            <li><a href="../components/breakfast/breakfast.html">Breakfast</a></li>
            <li><a href="../components/lunch/lunch.html">Lunch</a></li>
            <li><a href="../components/dinner/dinner.html">Dinner</a></li>
            <li><a href="../components/dessert/dessert.html">Dessert</a></li>
        </ul>
        <div class="button">
            <button><a href="../html/reservations.html">Book a dish</a></button>
        </div>
    </div>
</div>
<div class="content">
    <div class="wines">
        <h2>Wines & Beers</h2>
        <p id="header"></p>
        <p id="desc"></p>
    </div>
    <div className='wines'></div>
    <div class="Cocktails">
        <h2>Cocktails</h2>
        <p id="text">
            {<Cocktail/>}
        </p>
        
    </div>
</div>
</div>

<div class="content2">

</div>
    </div>
  )
}

export default Menu