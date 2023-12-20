import React from 'react';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import './navbar.css';
import logo from '../../assets/images/logo.svg'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from "react";

const Menu = () => (
    <>
        <p><Link className='anchor' to="/">Home</Link></p>
        <p><Link className='anchor' to="/community">Community</Link></p>
        <p><Link className='anchor' to="/create">Create</Link></p>
        <p><Link className='anchor' to="/about">About</Link></p>
    </>
)


function Navbar(props) {

    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate=useNavigate()

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div>
                    <img src={logo} alt="Logo" className='n-logo' onClick={()=>navigate('/')}/>
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu/>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <button onClick={()=>navigate('/create')}>Get Started</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu/>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <button onClick={()=>navigate('/create')}>Get Started</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;