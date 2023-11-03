import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { main } from './assets';
import { Home, CreatePost } from './page';
import './styles/ICreate.css'
import Navbar from './page/navbar/Navbar';
import Header from './page/header/Header';

const App = () => (
  <BrowserRouter>
    <main className="w-full">
    
      <Routes>
      
        <Route path="/" element={<div className='gpt-header-container'><Navbar/><Header /></div> }/>
        <Route path="/home" element={<div className='gpt-home-container'><Navbar/><Home /></div>} />
        <Route path="/create-post" element={<div className='gpt-create-container'><Navbar/><CreatePost /></div>} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
