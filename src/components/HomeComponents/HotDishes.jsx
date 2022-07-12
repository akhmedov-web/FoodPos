import React from 'react'
import "../../style/Home.css";
import HotDishCard from './HotDishCard';
export default function HotDishes() {
  return (
    <div className='hotDishes'>
      <ul className='hotDishesHeader mt-xl-0 mt-3'>
        <h4>CHOOSE DISHES</h4>
  <select class="form-select text-white me-4 " style={{backgroundColor:"#1F1D2B"}} aria-label="Default select example">
    <option selected>Dine in</option>
    <option value="1">Breakfast</option>
    <option value="2">Dinner</option>
    <option value="3">Supper</option>
  </select>
      </ul>
      <div className='hotDishesCardArea'>
<HotDishCard/>
<HotDishCard/>
<HotDishCard/>
<HotDishCard/>
<HotDishCard/>
<HotDishCard/>
      </div>
    </div>
  )
}
