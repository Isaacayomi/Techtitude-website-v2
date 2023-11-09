import React from 'react'
import ReactDOM from 'react-dom/client'

import { CV_ICON, ELLIPSE, INTERNSHIP_ICON, MENTORSHIP_ICON, PROJECT_ICON } from '../assets/images/img';

const CardCarousels = () => {
    return (
        <div className="CardContainer">
            <div className='CardOne Card' >
                <div className='RoundedBg' >
                    <img src={ELLIPSE} alt='rounded-bg' className='EllipseImg' />
                    <img src={INTERNSHIP_ICON} alt='Internship Icon' className='CardInternship' />
                </div>
                <h1 className='CardHeading'>Internship</h1>
                <p className='CardSummary'>Our academy provides internship opportunites to our students, allowing them to gain practical experience in a real-world setting. This helps students apply theoretical knowledge in practical situations and develop skills that employers seek.</p>
            </div>
            <div className='CardTwo Card'>
                <div className='RoundedBg2'>
                    <img src={ELLIPSE} alt='rounded-bg' className='EllipseImg2' />
                    <img src={MENTORSHIP_ICON} alt='Mentorship Icon' className='CardMentorship' />
                </div>
                <h1 className='CardHeading'>Mentorship</h1>
                <p className='CardSummary'>Our experienced mentors guide students through their tech journey, providing advice, and feedback. This helps our students build confidence, acquire new skills, and gain insights into the tech industry.</p>
            </div>
            <div className='CardThree Card'>
                <div className='RoundedBg3'>
                    <img src={ELLIPSE} alt='rounded-bg' className='EllipseImg3' />
                    <img src={CV_ICON} alt='CV Icon' className='CvIcon' />
                </div>
                <h1 className='CardHeading'>CV Revamp</h1>
                <p className='CardSummary'>We help students revamp their resumes to showcase their skills, achievements, and projects. This improves their chances of getting noticed by potential employers and getting hired for tech roles.</p>
            </div>

            <div className='CardFour Card'>
                <div className='RoundedBg4'>
                    <img src={ELLIPSE} alt='rounded-bg' className='EllipseImg4' />
                    <img src={PROJECT_ICON} alt='Project Icon' className='ProjectIcon' />
                </div>
                <h1 className='CardHeading'>Real Life Project</h1>
                <p className='CardSummary'>We assign real-life projects to our students, allowing them to apply their knowledge and skills to solve real-world problems. This helps students develop problem-solving skills, teamwork skills, and prepares them for future roles in tech.</p>
            </div>
        </div>
    )
}
export default CardCarousels;