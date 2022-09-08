import React,{useState,useEffect} from 'react'

function MenuData() {
    const [meals,setMeals]=useState('')

    useEffect(()=>{
        fetch('http://localhost:9292/foods')
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[])

  return (
    <div>
      
    </div>
  )
}

export default MenuData;
