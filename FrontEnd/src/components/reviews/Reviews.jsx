import React from 'react'

function Reviews() {

  function Review({name,review}){
    return (
      <div className="reviewCont">
      <h2>{name}</h2>
      <p>{review}</p>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
  </div>
    )
    
  }
  return (
    <div className="slideshow-container">
    <div className="reviews">
      <h1>What people say about us</h1>
      <div className="reviewMain">
          
  <div className="column">
          <div className="user">
              <img src="./assets/images/Rectangle 3.png" alt="" width="100"/>
          </div>
          <Review name={'Jane Dane'} review={'This spot gives extraordinary service and yummy meals.The meals served <br/>rapidly and the rates were reasonable. Highly recommended'}/>
      </div>
      </div>
  </div></div>
  )
}

export default Reviews