import React,{useState,useEffect} from 'react'
import Cocktail from './Cocktail';




function QuickDrinks() {
  const [meals,setMeals]=useState('')

  useEffect(()=>{
      fetch('http://localhost:9292/foods')
      .then(res=>res.json())
      .then(data=>setMeals(data))
  },[])
  console.log(meals);

    const cocktails = [
        {
          title: 'Aperol Sprtiz',
          price: '$20',
          tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
        },
        {
          title: "Dark 'N' Stormy",
          price: '$16',
          tags: 'Dark rum | Ginger beer | Slice of lime',
        },
        {
          title: 'Daiquiri',
          price: '$10',
          tags: 'Rum | Citrus juice | Sugar',
        },
        {
          title: 'Old Fashioned',
          price: '$31',
          tags: 'Bourbon | Brown sugar | Angostura Bitters',
        },
        {
          title: 'Negroni',
          price: '$26',
          tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
        },
      ];
      const wines = [...meals]


  return (
    <div className="content2">
    <div className="wines">
        <h2>Wines</h2>
        <p id='text'>
           {<Cocktail objects={wines}/>}
        </p>
    </div>
    <div className='wines img'></div>
    <div className="wines">
        <h2>Cocktails</h2>
        <p id="text">
            {<Cocktail objects={cocktails}/>}
        </p>
        
    </div>
</div>
  )
}

export default QuickDrinks