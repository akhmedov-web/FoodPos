import React from 'react'
import HomeHeader from './HomeHeader';
import HotDishes from './HotDishes';
import { Outlet, NavLink } from 'react-router-dom'
export default function HomeLeftBlock() {
  return (
    <div className="homeLeftBlock">
      <HomeHeader />
      <div className="homeMainBlock">
        <div className='homeMainMenu d-flex justify-content-between align-items-center'>
          <li className="homeMenu">Home dishes</li>
          <li className="homeMenu">Cold dishes</li>
          <li className="homeMenu">Soup</li>
          <li className="homeMenu">Grill</li>
          <li className="homeMenu">Appetizer</li>
          <li className="homeMenu">Dessert</li>
        </div>
        <div className="homeCards">
          <HotDishes/>
        </div>
      </div>
    </div>
  )
}
