import React from 'react'
import ReactDOM from 'react-dom/client'
import { FOOTER_LOGO, SOCIALS_ICON } from '../assets/images/img';

const Footer = () => {
    return (
        <div className='FooterSection'>
            <div className='Footer'>
                <div className='FooterLogo'>
                    <img src={FOOTER_LOGO} alt='footer-Logo' />
                </div>

                <div className='FooterNav'>
                    <ul>
                        <li> <a href='#company-page'>COMPANY</a></li>
                        <li> <a href='#courses-page'>COURSES</a></li>
                        <li> <a href='#'>RESOURCES</a></li>
                    </ul>
                    <div className='ContactAddress'>
                        <p className='Address'>7 Adedotun Dina, Mende, Maryland, Lagos - Nigeria</p>
                        <p className='Mail'>
                            <a href='mailto:admin@techtitude.org'>admin@techtitude.org</a>
                        </p>
                        <p>
                            <a href="tel:+23467908269" className='Phone'>09067908269
                            </a>
                        </p>
                    </div>
                </div>

                <div className='NewsletterSection'>
                    <div className='Newsletter'>
                        <p>Like to receive our Newsletter?</p>
                        <div>
                            <input type='email' placeholder='Enter Your Email' />
                            <button className='SubscribeBtn'>Subscribe</button>
                        </div>

                    </div>

                    <div className='Socials'>
                        <img src={SOCIALS_ICON} alt='social-media-icons' />
                    </div>
                </div>


            </div>
            <div className='Copyright'>
                <p>TECHTITUDE ©2023 - All Right reserved!</p>
            </div>
        </div>
    )
}

export default Footer;
