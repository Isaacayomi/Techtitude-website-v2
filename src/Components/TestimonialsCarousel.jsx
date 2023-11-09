import React from 'react'
import ReactDOM from 'react-dom/client'
import { STARS_ICONS } from '../assets/images/img'

const TestimonialsCarousels = () => {
    return (
        <div className='TestimonialHeadings'>
            <h1 className='FirstHeading'>TESTIMONIALS</h1>
            <h2 className='SecondHeading'>What some of our Trainees have to say about us!</h2>

            <div className='TestimonialCards'>
                <div className='Testimonial'>
                    <img src={STARS_ICONS} alt='Stars' />
                    <div className='MainTestimonial'>
                        <p className='Greetings'>Hello Techtitude,</p>
                        <p className='MainText'>While waiting for my fiance visa to be approved in America, my husband suggested that i take the Business Analysis course. I am thrilled to share that i now work for one of the top 4 companies in America. I am truly grateful for your outstanding traning and support. You guys are the best! I am excited to spread the word about Techtitude and recommend your services to everyone i know.</p>
                        <p className='Recommendation'>Thank you once again!</p>
                    </div>

                    <div className='Witness'>
                        <div className='ImgContainer'>

                        </div>

                        <div>
                            <p className='Name'>Adejare Adegoke</p>
                            <p className='Stack'>Product Design - Lagos</p>
                        </div>
                    </div>

                </div>

                <div className='Testimonial'>
                    <img src={STARS_ICONS} alt='Stars' />
                    <div className='MainTestimonial'>

                        <p className='Greetings'>Dear Techtitude,</p>
                        <p className='MainText'>Thank you for the excellent Cyber Security course! I now work at a top bank in Nigeria and thoroughly enjoyed the program. Surprisingly, i discovered a passion for coding. Your help with my CV was invaluable, and i'm currently in the second stage of an interview with a Canadian company. Mr. T is an amazing lecturer..</p>
                    </div>
                    <p className='Recommendation'>I highly recommend Techtitude! Ajoke</p>

                    <div className='Witness'>
                        <div className='ImgContainer'>

                        </div>

                        <div>
                            <p className='Name'>Ajoke</p>
                            <p className='stack'>Cybersecurity - Lagos</p>
                        </div>
                    </div>

                </div>

                <div className='Testimonial'>
                    <img src={STARS_ICONS} alt='Stars' /> <div className='MainTestimonial'>
                        <p className='Greetings'>Hello Techtitude,</p>
                        <p className='MainText'>I had a fantastic time in your classes, and the mentoring session helped solidify my decision to pursue a career as a Business Analyst. This training surpassed my expectations and stood out among others. Thank you for providing exceptional education and guidance. I'm on my way to becoming a great BA, all thanks to Techitude.</p>
                    </div>
                    <p className='Recommendation'>Thank you once again!</p>

                    <div className='Witness'>
                        <div className='ImgContainer'>

                        </div>

                        <div>
                            <p className='Name'>Anonymous</p>
                            <p className='Stack'>Business Analysis - Lagos</p>
                        </div>
                    </div>

                </div>

                <div className='Testimonial'>
                    <img src={STARS_ICONS} alt='Stars' />
                    <div className='MainTestimonial'>
                        <p className='Greetings'>Hello Techtitude,</p>
                        <p className='MainText'>This is my first ever training in my journey into tech, but it defintely was worth it. I say this because i had tried studying on my own for months with not much progress, but coming across this training gave me a good feel of what this area of life truly entails..</p>
                    </div>
                    <p className='Recommendation'>Thank you for having me, and expect me back in another cohort (The essence of this is accountability).</p>

                    <div className='Witness'>
                        <div className='ImgContainer'>

                        </div>

                        <div>
                            <p className='Name'>Adejare Adegoke</p>
                            <p className='Stack'>Product Design - Lagos</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default TestimonialsCarousels