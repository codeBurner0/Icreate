import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home, CreatePost } from './page';
const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]" id="back">
      <Link to="/">
        <img src="../src/assets/logo12.png" alt="" className='image' />
      </Link>
      <Link to="/create-post" className="font-inter font-medium  text-white px-8 py-2 rounded-md"><button className="button-85" role="button">Create</button></Link>
    </header>
    <main >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);
export default App;
