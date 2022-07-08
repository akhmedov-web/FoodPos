import React from 'react'
import HomeHeader from './HomeHeader'
import { BrowserRouter, Outlet, Link } from 'react-router-dom'
import HomeDishes from './HomeDishes'
export default function HomeLeftBlock() {
  return (
    <div className="homeLeftBlock">
      <HomeHeader />
      <div className="homeMainBlock">
        <ul className='homeMainMenu d-flex justify-content-between align-items-center'>
          <Link to="/home">Home dishes</Link>
          <Link to="/home/colddishes">Cold dishes</Link>
          <Link to="/home/soup">Soup</Link>
          <Link to="/home/grill">Grill</Link>
          <Link to="/home/appetizer">Appetizer</Link>
          <Link to="/home/dessert">Dessert</Link>
        </ul>
        <div className="homeCards">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
