import React from 'react'
import ReactDOM from 'react-dom/client'
import { NAV_ICON, TECHTITUDE_LOGO } from '../assets/images/img';
import { Form, Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='ContainerNav'>
            <div className='Logo'>
                <img src={TECHTITUDE_LOGO} alt='Techtitude Logo' className='NavLogo' />
            </div>

            <nav className='NavItems'>
                <ul>
                    <li>TESTIMONIALS</li>
                    <li>COURSES</li>
                    <li>INSTRUCTORS</li>
                    <li>SIGN UP NOW</li>
                </ul>
            </nav>

            <div className='NavIcon'>
                <img src={NAV_ICON} alt='Nav Icon' />
            </div>
        </div>


    )
}

export default Navbar;