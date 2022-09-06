import React from 'react'
import Cocktail from './Cocktail';




function QuickDrinks() {


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
      const wines = [
        {
          title: "Generali Meakins",
          price: "$56",
          tags: "AU | Bottle"
        },
        {
          title: "Ka Quarter",
          price: "$59",
          tags: "AU | Bottle"
        },
        {
          title: "La Vieillw Rose",
          price: "$44",
          tags: "FR | 750 ml"
        },
        {
          title: "Rhino Pale Ale",
          price: "$31",
          tags: "CA | 750 ml"
        },
        {
          title: "Irish Guinness",
          price: "$26",
          tags: "IE | 750 ml"
        }
      ];
    


  return (
    <div className="content">
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