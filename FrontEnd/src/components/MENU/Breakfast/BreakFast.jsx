import React,{useState,useEffect} from 'react'

import breakfast from './breakfast.css'
function BreakFast() {

const [breakF,setBreakF]=useState('')
    useEffect(()=>{
      fetch('http://localhost:9292/foods')
      .then(res=>res.json())
      .then(data=>{
        setBreakF(data.filter(data=>data.food_type==1).map(food=><BreakFastCard item={food}/>))})
    },[])
function BreakFastCard({item}){
    return(
        <div className="dinner1">
            <div className="text">
                <h3>{item.meal_name}</h3>
                <p>{item.description}</p>
                <h3>{item.price}</h3>
            </div>
            <img src={item.image} alt=""/>
        </div>
    )
}

  return (
    <div className="main">
        <div className="head-text">
            <h1>Mountain Finest dining</h1>
        </div>
        <div className="main-dinner">
            {breakF}
        </div>
    </div>
  )
}

export default BreakFast