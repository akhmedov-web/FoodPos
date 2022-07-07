import React from 'react'
import HomeHeader from './HomeHeader'
import {BrowserRouter,Outlet,Link} from 'react-router-dom'
import HomeDishes from './HomeDishes'
export default function HomeLeftBlock() {
  return (
    <div className="homeLeftBlock">
      <HomeHeader/>
      <div className="homeMainBlock">
        <ul className='homeMainMenu d-flex justify-content-between align-items-center'>
          <Link to="/">Home dishes</Link>
          <Link to="/colddishes">Cold dishes</Link>
          <Link to="/soup">Soup</Link>
          <Link to="/grill">Grill</Link>
          <Link to="/appetizer">Appetizer</Link>
          <Link to="/dessert">Dessert</Link>
        </ul>
            <div className="homeCards">
              <Outlet/>
            </div>
      </div>
    </div>
  )
}
