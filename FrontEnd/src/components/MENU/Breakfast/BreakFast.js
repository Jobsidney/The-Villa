import React from 'react'
import breakfast from './breakfast.css'
function BreakFast() {
    
function BreakFastCard(){
    return(
        <div class="dinner1">
            <div class="text">
                <h3>Duck a l'Orange</h3>
                <p>Roast duck with a bigarade sauce and oranges</p>
            </div>
            <img src="../../images/pic1.png" alt=""/>
        </div>

    )
}


  return (
    <div class="main">
        <div class="head-text">
            <h1>Mountain Finest dining</h1>
        </div>
        <div class="main-dinner">

            <BreakFastCard/>
            <BreakFastCard/>

            <BreakFastCard/>
            <BreakFastCard/>
            <BreakFastCard/>
            <BreakFastCard/>
            <BreakFastCard/>
            <BreakFastCard/>
        </div>
    </div>
  )
}

export default BreakFast