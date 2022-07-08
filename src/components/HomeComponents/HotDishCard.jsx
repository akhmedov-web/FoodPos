import React from 'react'
import FoodPhoto from './images/image.jpg';
export default function HotDishCard() {
  return (
    <div className="hotDishesCard">
  <img src={FoodPhoto} alt="img" className='FoodImg' />
  <li>Spicy seasoned seafood noodles</li>
  <p>$ 2.29</p>
  <p>20 Bowls available</p>
</div>
  )
}
