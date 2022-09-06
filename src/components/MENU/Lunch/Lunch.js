import React from 'react'
import lunch from './lunch.css'
function Lunch() {

    function LunchCard(){
        return(
            <div class="card1">
            <h3>01. Dessert</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse modi ratione perspiciatis ipsa perferendis labore eligendi! Corrupti dolores eos quo doloremque id, pariatur esse voluptatibus, officia voluptatem nostrum ea est.</p>
            <img src="../../images/pic2.png" alt=""/>
            <div class="price">
                <p>$20</p>
            </div>
        </div>
        )
    }
  return (
<div className="cards ">
    <LunchCard/>
    <LunchCard/>

        
</div>
  )
}

export default Lunch