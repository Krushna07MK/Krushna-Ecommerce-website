import React from 'react'
import './DescriptionBox.css'
const descriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An E-commerce website is an online platform that facilitate buying and selling of products or services over the internet, serves as a virtual marketplace where businesses and indivisuals showcase their products, interact with customers, and cunducts transactions without the need for a physical presence. E-commerce websites have gained immence popularity due to their convinient accessibility, and the global reach they offer.</p>
        <p>E-commerce website typically display products or services are detailed descriptions, images, prices and any other avilable varietys(eg. sizes, colors). each product usually has its own dedicated page with relevent information.</p>
      </div>
    </div>
  )
}

export default descriptionBox
