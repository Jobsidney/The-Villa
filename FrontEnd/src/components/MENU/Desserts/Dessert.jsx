import React,{useState,useEffect} from 'react'
import dessert from './dessert.css'

function Dessert() {

    const [breakF,setBreakF]=useState('')
    useEffect(()=>{
      fetch('http://localhost:9292/foods')
      .then(res=>res.json())
      .then(data=>{
        setBreakF(data.filter(data=>data.food_type==4).map(food=><DessertCard item={food}/>))})
    },[])

    function DessertCard({item}){
        return(
            <div class="text1">
                <h3>{item.meal_name} <span>{item.price}</span></h3>
                <p>{item.description}
                </p>
            </div>
        ) }


  return (
    <div class="main-content">
        <div class="main-text">
            <h1>Desserts</h1>
            {breakF}

        </div>
        <div class="image">
                <img src="../../images/dessert.png" alt=""/>
            </div>

    </div>
  )
}

export default Dessert