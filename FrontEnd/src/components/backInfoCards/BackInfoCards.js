import React from 'react'

function BackInfoCards() {
    function Card({title,descr,image}){
        return (
        <div className="cardContent">
            <div className="image">
                <img src={image} alt="" width="120"/>
            </div>
            <div className="innerCont">
                <h3>{title}</h3>
                <p>{descr}</p>

            </div>
        </div>)
    }


  return (
    <div className="cards">   
        <Card title={"Discount Vouchers"} descr={"Cozy up with your loved one. With food gift cards and vouchers."} />
        <Card title={"Fresh & Amazing"} descr={"A small, intimate, and inviting space for an unforgettable meal."}/>
        <Card title={"Delivery Available"} descr={"Home food delivery service that's easy on the wallet."}/>
    </div>
  )
}

export default BackInfoCards