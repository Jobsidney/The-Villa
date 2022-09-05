import React from 'react'

function BackInfoCards() {
    


    const dataa=[
        {
            title:"Discount Vouchers",
            descr: "Cozy up with your loved one. With food gift cards and vouchers."
        },
        {
            title:"Fresh & Amazing",
            descr: "A small, intimate, and inviting space for an unforgettable meal."
        },
        {
            title:"Delivery Available",
            descr: "Home food delivery service that's easy on the wallet."
        }
    ]
    function Card(title,descr){
        <div className="cardContent">
            <div className="image">
                <img src='/src/images/discount.svg' alt="" width="120"/>
            </div>
            <div className="innerCont">
                <h3>{title}</h3>
                <p>{descr}</p>

            </div>
        </div>
    }


  return (
    <div className="cards">
        {
            dataa.map(card =>
                <Card title={card.title} descr={card.descr}/>
            )
        }        
    </div>
  )
}

export default BackInfoCards