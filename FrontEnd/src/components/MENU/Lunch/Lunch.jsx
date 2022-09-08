import React,{useState,useEffect} from 'react'
import lunch from './lunch.css'
function Lunch() {

    const [breakF,setBreakF]=useState('')
    useEffect(()=>{
      fetch('http://localhost:9292/foods')
      .then(res=>res.json())
      .then(data=>{
        setBreakF(data.filter(data=>data.food_type==3).map(food=><LunchCard item={food}/>))})
    },[])
    function LunchCard({item}){
        return(
            <div className="card1">
            <h3>{item.id}. <br />{item.meal_name}</h3>
            <p>{item.description}</p>
            <img src={item.image} alt=""/>
            <div className="price">
                <p>{item.price}</p>
            </div>
        </div>
        )
    }
  return (
<div className="cards ">
{breakF}
        
</div>
  )
}

export default Lunch