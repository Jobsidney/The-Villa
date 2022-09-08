import React,{useState,useEffect} from 'react'
import Cocktail from './Cocktail';




function QuickDrinks() {
  const [meals,setMeals]=useState('')

  useEffect(()=>{
      fetch('http://localhost:9292/foods')
      .then(res=>res.json())
      .then(data=>setMeals(data))
  },[])


    const cocktails = [...meals];
      const wines = [...meals]


  return (
    <div className="content2">
    <div className="wines">
        <h2>Wines</h2>
        <p id='text'>
           {<Cocktail objects={wines} type='5'/>}
        </p>
    </div>
    <div className='wines img'></div>
    <div className="wines">
        <h2>Cocktails</h2>
        <p id="text">
            {<Cocktail objects={cocktails} type='6'/>}
        </p>
        
    </div>
</div>
  )
}

export default QuickDrinks