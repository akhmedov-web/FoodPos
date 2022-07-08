import React from 'react'
import HomeHeader from './HomeHeader'
import { Outlet, NavLink } from 'react-router-dom'
export default function HomeLeftBlock() {
  return (
    <div className="homeLeftBlock">
      <HomeHeader />
      <div className="homeMainBlock">
        <div className='homeMainMenu d-flex justify-content-between align-items-center'>
          <NavLink className={({isActive}) => isActive ? "homeMenuActive" : "homeMenu"} to="/home/">Home dishes</NavLink>
          <NavLink className={({isActive}) => isActive ? "homeMenuActive" : "homeMenu"} to="/home/colddishes">Cold dishes</NavLink>
          <NavLink className={({isActive}) => isActive ? "homeMenuActive" : "homeMenu"} to="/home/soup">Soup</NavLink>
          <NavLink className={({isActive}) => isActive ? "homeMenuActive" : "homeMenu"} to="/home/grill">Grill</NavLink>
          <NavLink className={({isActive}) => isActive ? "homeMenuActive" : "homeMenu"} to="/home/appetizer">Appetizer</NavLink>
          <NavLink className={({isActive}) => isActive ? "homeMenuActive" : "homeMenu"} to="/home/dessert">Dessert</NavLink>
        </div>
        <div className="homeCards">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
