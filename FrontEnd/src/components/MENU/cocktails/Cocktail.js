import React from 'react'

function Cocktail({objects}) {


     const data= objects.map(item=>
        <div className='obj'>
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
            <p>{item.tags}</p>
        </div>
)

  return (
    <div >
        {data}
    </div>
  )
}

export default Cocktail