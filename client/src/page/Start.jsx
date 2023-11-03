import React from 'react'
import '../../styles/Start.css'
import { useNavigate } from 'react-router-dom'
import About from './About'
function HomePage() {
  const navigate=useNavigate();
  return (
    <>
    <div className='home-container'>
      <div className='title-box'>
        <h1>
          <span className='title-span1'>"Take control of</span>
          <span className='title-span2'> your finance."</span>
        </h1>
        <p className='title-para'>
          The two most important emotions in the market are fear and greed. 
          Emotions lead to mistakes; therefore, to be a good trader or investor, 
          you must learn to control them. - Richard Dennis
        </p>
        <button className='getStarted-button' onClick={()=>navigate('/indicator')}>Get Started</button>
      </div>
      
    </div>
    <About/>
    </>
  )
}

export default HomePage

