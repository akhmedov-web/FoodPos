import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";
import Certificate from './pages/Certificate';
import Statistic from './pages/Statistic';
import Message from './pages/Message.jsx';
import Notification from './pages/Notification';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className='full-blog d-xl-flex d-block'>
      <BrowserRouter>
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/statistic" element={<Statistic />} />
            <Route path="/message" element={<Message />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
