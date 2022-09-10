import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function SampleMenu() {

    const data=[
        {
            title: 'breakfast',
            descr: "An excellent way to make any breakfast event memorable is to add a made-to-order breakfast station that incorporates fresh ingredients.",
            image: "../../images/burger.png",
            alternative: "Burger image",
            link: "/menu"
        },
        {
            title: 'Dessert',
            descr: "Ordering an appetizer rather than an entree can be the answer to enjoying restaurant meals without busting your calorie budget.",
            image: "../../images/dessert.png",
            alternative: "Dessert image",
            link: "/menu"
        },
        {
            title: 'Appetizers',
            descr: "Ordering an appetizer rather than an entree can be the answer to enjoying restaurant meals without busting your calorie budget.",
            image: "../../images/food2.png",
            alternative: "Appetizer image",
            link: "/menu"
        }
    ]
    function MenuCard({title,descr,image,alternative,link}){
        return(
            <div className="container1">
            <img src={image} alt={alternative}/>
            <h4>{title}</h4>
            <p>{descr}</p>
                <Button word={'Expore More'} link={link}/>
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
            data.map(item=><Link to={item.link}><MenuCard title={item.title} descr={item.descr} image={item.image} alternative={item.alternative} link={item.link}/></Link>)
        }
    </div>
    {/* <Link to='menu'><Button word={"Explore Menu"} classN={'btn'} link='/menu'/></Link> */}
    <div className="empty" ></div>
    </div>

  )
}

export default SampleMenu