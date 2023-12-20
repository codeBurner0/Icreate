import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, CreatePost } from './page';
import Navbar from './page/navbar/Navbar';
import Header from './page/header/Header';
import Features from './page/features/Features';
import Possibility from './page/possibility/Possibility';
import Footer from './page/footer/Footer';

const App = () => (
  <BrowserRouter>
    <main className="w-full">
      <Routes>
        <Route path="/" element={<div className='gpt-header-container'><Navbar/><Header /><Features/><Possibility/></div> }/>
        <Route path="/community" element={<div className='gpt-home-container'><Navbar/><Home /></div>} />
        <Route path="/create" element={<div className='gpt-create-container'><Navbar/><CreatePost /></div>} />
        <Route path="/about" element={<div className='gpt-about-container'><Navbar/><Features/><Possibility/></div>} />
      </Routes>
    </main>
    <Footer/>
  </BrowserRouter>
);

export default App;
