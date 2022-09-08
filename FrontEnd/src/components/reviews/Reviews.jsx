import React from 'react'

function Reviews() {

  function Review({name,review}){
    return (
      <div class="reviewCont">
      <h2>{name}</h2>
      <p>{review}</p>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
  </div>
    )
    
  }
  return (
    <div class="slideshow-container">
    <div class="reviews">
      <h1>What people say about us</h1>
      <div class="reviewMain">
          
  <div class="column">
          <div class="user">
              <img src="./assets/images/Rectangle 3.png" alt="" width="100"/>
          </div>
          <Review name={'Jane Dane'} review={'This spot gives extraordinary service and yummy meals.The meals served <br/>rapidly and the rates were reasonable. Highly recommended'}/>
      </div>
      </div>
  </div></div>
  )
}

export default Reviews