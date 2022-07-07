import React from 'react';
import "../style/Home.css";
import HomeLeftBlock from '../components/HomeComponents/HomeLeftBlock';
import HomeRightBlock from '../components/HomeComponents/HomeRightBlock';
export default function Home() {
  return (
    <div className= 'home d-flex'>
      <HomeLeftBlock/>
      <HomeRightBlock/>
    </div>
  )
}
