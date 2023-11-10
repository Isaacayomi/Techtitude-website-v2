import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom/client'

import NAV_ICON from '/images/nav-icon.png'
import TECHTITUDE_LOGO from '/images/techtitude-logo.png'
import { redirect } from 'react-router-dom';
// import { NAV_ICON, TECHTITUDE_LOGO } from '../assets/images/img';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const ToggleMenu = () => {
        setOpen(!open);
        document.querySelector('.NavItems').classList.toggle('open');
    };

    const handleLinkClick = (url) => {
        redirect(url);
    };

    return (
        <div className='ContainerNav'>
            <div className='Logo'>
                <img src={TECHTITUDE_LOGO} alt='Techtitude Logo' className='NavLogo' />
            </div>

            <nav className={`NavItems ${open ? 'open active' : ''}`}>
                <ul>
                    <li onClick={() => handleLinkClick('/testimonials')}>TESTIMONIALS</li>
                    <li onClick={() => handleLinkClick('/courses')}>COURSES</li>
                    <li onClick={() => handleLinkClick('/instructors')}>INSTRUCTORS</li>
                    <li onClick={() => handleLinkClick('/signup')}>SIGN UP NOW</li>
                </ul>
            </nav>
            <div className='NavIcon'>

                <button onClick={ToggleMenu}>
                    <img src={NAV_ICON} alt='Nav Icon' />
                </button>
            </div>
        </div>


    )
}

export default Navbar;