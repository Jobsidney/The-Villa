import React from 'react'
import Button from './Button'

function SampleMenu() {

    const data=[
        {
            title: 'breakfast',
            descr: "An excellent way to make any breakfast event memorable is to add a made-to-order breakfast station that incorporates fresh ingredients.",
            image: "../../images/food2.png",
            alternative: "Burger image"
        },
        {
            title: 'Dessert',
            descr: "Ordering an appetizer rather than an entree can be the answer to enjoying restaurant meals without busting your calorie budget.",
            image: "../../images/food2.png",
            alternative: "Dessert image"
        },
        {
            title: 'Appetizers',
            descr: "Ordering an appetizer rather than an entree can be the answer to enjoying restaurant meals without busting your calorie budget.",
            image: "../../images/food2.png",
            alternative: "Appetizer image"
        }
    ]
    function MenuCard({title,descr,image,alternative}){
        return(
            <div className="container1">
            <img src={image} alt={alternative}/>
            <h4>{title}</h4>
            <p>{descr}</p>
                <Button word={'Expore More'}/>
        </div>
        )
    }

  return (
    <div className="menu">
    <h1>
        We offer a top Notch Menu
    </h1>

    <div className="container">
        {
            data.map(item=><MenuCard title={item.title} descr={item.descr} image={item.image} alternative={item.alternative}/>)
        }
    </div>
    <Button word={"Explore Menu"} classN={'btn'}/>
    <div className="empty"></div>
    </div>

  )
}

export default SampleMenu