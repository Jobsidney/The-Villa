import React from 'react'
import dessert from './dessert.css'

function Dessert() {

    function DessertCard(){
        return(
            <div class="text1">
                <h3>Key Lime pie <span>$8.00</span></h3>
                <p>Tangy Custard with Graham Cracker 
                    crust. Wripped cream and lime zest
                </p>
            </div>
        ) }


  return (
    <div class="main-content">
        <div class="main-text">
            <h1>Desserts</h1>
            <DessertCard/>

        </div>
        <div class="image">
                <img src="../../images/dessert.png" alt=""/>
            </div>

    </div>
  )
}

export default Dessert