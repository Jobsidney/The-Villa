import React from 'react'

function Cocktail({objects,type}) {


     const data= objects.filter(item=>item.food_type== type).map(item=>
        <div className='obj'>
            <h3>{item.meal_name}</h3>
            <h3>{item.price}</h3>
            <p>{item.description}</p>
        </div>
)

  return (
    <div >
        {data}
    </div>
  )
}

export default Cocktail