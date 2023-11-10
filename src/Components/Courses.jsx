import React from 'react'
import ReactDOM from 'react-dom/client'

// import { CYBER_SECURITY, MOBILE_BUSINESS_ICON, MOBILE_CYBER_SECURITY, SCRUM_ICON, MOBILE_UIUX_ICON, MOBILE_SCRUM_ICON, DATA_ANALYTICS, UIUX_ICON } from '../assets/images/img'
import CYBER_SECURITY from '/images/cyber-security-icon.png'
import MOBILE_BUSINESS_ICON from '/images/mobile-imgs/business-logo.png'
import MOBILE_CYBER_SECURITY from '/images/mobile-imgs/mobile-cyber-security.png'
import SCRUM_ICON from '/images/scrum-icon.png'
import MOBILE_UIUX_ICON from '/images/mobile-imgs/uiux-Logo.png'
import MOBILE_SCRUM_ICON from '/images/mobile-imgs/scrum-Logo.png'
import DATA_ANALYTICS from '/images/data-analytics-icon.png'
import UIUX_ICON from '/images/uiux-icon.png'


const CoursesSection = () => {
    return (

        <div className='CoursesSection' id='courses-page'>
            <div className='CoursesHeadings '>
                <h1 className='HeadingOne'>COURSES</h1>
                <h2 className='HeadingTwo'>UpSkill yourself in any of these.</h2>
            </div>
            <div>

                <div className='DataAnalyticsCard CoursesCard'>
                    <div className='HideOnMobile'>
                        <img src={DATA_ANALYTICS} alt='data-analytics-icon' />
                    </div>
                    <div>
                        <div className='GroupedIcon HiddenImage'><img src={MOBILE_BUSINESS_ICON} alt='Business_icon1' /></div>
                        <p className='Heading'>Data Analytics</p>
                        <p className='Summary'>Data Analytics will help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions.</p>
                        <div className='Ctas'>
                            <button>Enroll Now!</button>
                            <button>Download Brochure</button>
                            <button> ₦150,000</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='BusinessAnalyticsCard CoursesCard'>
                <div className='HideOnMobile'>
                    <img src={DATA_ANALYTICS} alt='Business-Analytics-icon' />
                </div>
                <div>
                    <div className='GroupedIcon HiddenImage'><img src={MOBILE_BUSINESS_ICON} alt='Business_icon2' /></div>
                    <p className='Heading'>Business Analysis</p>
                    <p className='Summary'>Business Analysis will help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions.</p>
                    <div className='Ctas'>
                        <button>Enroll Now!</button>
                        <button>Download Brochure</button>
                        <button>₦150,000</button>
                    </div>
                </div>
            </div>

            <div className='CyberSecurityCard CoursesCard'>

                <div className='HideOnMobile'>
                    <img src={CYBER_SECURITY} alt='cyber-security-icon' />
                </div>
                <div>
                    <div className='GroupedIcon HiddenImage' >                <img src={MOBILE_CYBER_SECURITY} alt='cyberSecurity-icon' />
                    </div>
                    <p className='Heading'>Cyber Security</p>
                    <p className='Summary'>Cyber Security will help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions.</p>
                    <div className='Ctas'>
                        <button>Enroll Now!</button>
                        <button>Download Brochure</button>
                        <button>₦150,000</button>
                    </div>
                </div>

            </div>

            <div className='FigmaCard CoursesCard'>

                <div className='HideOnMobile'>
                    <img src={UIUX_ICON} alt='figma-icon' />
                </div>

                <div>
                    <div className='GroupedIcon HiddenImage' >                <img src={MOBILE_UIUX_ICON} alt='Uiux-icon' />
                    </div>
                    <p className='Heading'>UI/UX Design</p>
                    <p className='Summary'>UI/UX Design will help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions.</p>
                    <div className='Ctas'>
                        <button>Enroll Now!</button>
                        <button>Download Brochure</button>
                        <button>₦150,000</button>
                    </div>

                </div>
            </div>

            <div className='ScrumCard CoursesCard'>
                <div className='HideOnMobile'>
                    <img src={SCRUM_ICON} alt='scrum-icon' />
                </div>
                <div>
                    <div className='GroupedIcon HiddenImage'>
                        <img src={MOBILE_SCRUM_ICON} alt='Scrum-icon' />
                    </div>
                    <p className='Heading'>Scrum</p>
                    <p className='Summary'>Scrum will help you differentiate yourself from other information technology and research workers who lack the same specialized knowledge as you. During your job search, you may have more job opportunities to pursue or qualify for more specialized positions.</p>
                    <div className='Ctas'>
                        <button>Enroll Now!</button>
                        <button>Download Brochure</button>
                        <button> ₦150,000</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesSection