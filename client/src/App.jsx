import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { main } from './assets';
import { Home, CreatePost } from './page';
import './styles/ICreate.css'
import Start from './page/Start';
import Navbar from './page/navbar/Navbar';
import Header from './page/header/Header';

const App = () => (
  <BrowserRouter>
    <main className="w-full">
      <Routes>
        <Route path="/" element={<div className='gpt-header-container'><Navbar/><Header /></div> }/>
        <Route path="/home" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
