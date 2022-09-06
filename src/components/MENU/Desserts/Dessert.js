import React from 'react'
import dessert from './dessert.css'

function Dessert() {
  return (
    <div class="main-content">
        <div class="main-text">
            <h1>Desserts</h1>
            <div class="text1">
                    <h3>Key Lime pie <span>$8</span></h3>
                    <p>Tangy Custard with Graham Cracker 
                        crust. Wripped cream and lime zest
                    </p>
            </div>
            <div class="text1">
                    <h3>Newyork cheesecake <span>$8.55</span></h3>
                    <p>Topped with caramel, chocolate curls and cocoa powder
                    </p>
                </div>

        </div>
        <div class="image">
                <img src="../../images/dessert.png" alt=""/>
            </div>

    </div>
  )
}

export default Dessert