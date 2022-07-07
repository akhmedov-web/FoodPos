import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./index.css";
import Certificate from './pages/Certificate';
import Statistic from './pages/Statistic';
import Message from './pages/Message.jsx';
import Notification from './pages/Notification';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import HomeDishes from './components/HomeComponents/HomeDishes';
import ColdDishes from './components/HomeComponents/ColdDishes';
import Dessert from './components/HomeComponents/Dessert';
import Appetizer from './components/HomeComponents/Appetizer';
import Soup from './components/HomeComponents/Soup';
import Grill from './components/HomeComponents/Grill';

export default function App() {
  return (
    <div className='full-blog d-xl-flex d-block'>
  <BrowserRouter>
  <Sidebar/>
  <div className="main">
  <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/certificate" element={<Certificate/>} />
          <Route path="/statistic" element={<Statistic/>} />
          <Route path="/message" element={<Message/>} />
          <Route path="/notification" element={<Notification/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/logout" element={<Logout/>} />

          <Route path="/" element={<Home/>}>
          <Route path="" element={<HomeDishes/>}></Route> 
          <Route path="homedishes" element={<HomeDishes/>}></Route>
          <Route path="colddishes" element={<ColdDishes/>}></Route>
          <Route path="soup" element={<Soup/>}></Route>
          <Route path="grill" element={<Grill/>}></Route>
          <Route path="appetizer" element={<Appetizer/>}></Route>
          <Route path="dessert" element={<Dessert/>}></Route>
          </Route>

  </Routes>
  </div>
  </BrowserRouter>
    </div>
  )
}
