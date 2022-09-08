import React from 'react'
import BackInfoCards from './backInfoCards/BackInfoCards'
import BackInfo from './BackInfo/BackInfo'
import Abouts from './aboutsSection/Abouts'
import SampleMenu from './SampleMenu/SampleMenu'
import Reviews from './reviews/Reviews'
import Footer from './footer/Footer'

function WholeFirstPage() {
  return (
    <div>
        <BackInfo/>
        <BackInfoCards/>
        <Abouts/>
        <SampleMenu/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default WholeFirstPage
