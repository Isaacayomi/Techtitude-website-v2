import { useState } from 'react'
import './App.scss'
import Navbar from './components/Nav'
import CardCarousels from './Components/CardCarousels'
import TestimonialsCarousels from './Components/TestimonialsCarousel'
import CoursesSection from './Components/Courses'
import InstructorsSection from './Components/InstructorsSection'
import Footer from './Components/Footer'
import { HER0_IMG } from './assets/images/img'


const HeroSection = () => {

  return (
    <div className='Hero' id='company-page'>
      <div className='HeroText'>
        <h1>UpSkill Yourself <span className='Italic'>with</span> TECHTITUDE</h1>
        <p>We empower <span className='Bold'>WOMEN</span> with the topical skills and knowledge to become tech leaders.</p>
        <button className='HeroBtn'>
          <a href='#regform'> SIGN UP NOW</a>
        </button>
      </div>

      <div className='HeroImg'>
        <img src={HER0_IMG} alt='hero-img' className='HiddenImg' />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="NaHam">
      {/*Navbar Pending*/}
      {Navbar()}
      {HeroSection()}
      {CardCarousels()}
      {TestimonialsCarousels()}
      {CoursesSection()}
      {InstructorsSection()}
      {Footer()}
    </div>
  )
}

  // export default App
