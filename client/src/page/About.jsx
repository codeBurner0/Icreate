import React from 'react'
import '../assets/styles/About.css'
import BodyImage from '../assets/images/bodyImage.png'
import { useNavigate } from 'react-router-dom'
function About() {
    const navigate=useNavigate();
  return (
    <div className='login-sec'>
            <div className="login-sec-left">
              <h1>The best way of manage your finances in just one place.</h1>
              <p className='login-sec-left-para'>
              So, what are you waiting for? Create your account and connect with us!</p>
              <button className='create-button' onClick={()=>navigate('/register')}>Create Account</button>
            </div>
            <div className="login-sec-right">
              <img src={BodyImage} alt="" className='login-sec-right-image'/>
            </div>
    </div>
  )
}

export default About
