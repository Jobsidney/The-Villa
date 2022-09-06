import React from 'react'

function Cocktail() {    
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
      const dataa=cocktails.map(item=>{
        <div>
            <h2>{item.title}</h2>
            <h4>{item.price}</h4>
            <h3>{item.tags}</h3>
        </div>
})
  return (
    <div>
        {
            dataa
        }
    </div>
  )
}

export default Cocktail