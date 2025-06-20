import React from 'react'
import Hero from '../Components/Hero'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Section5 from '../Components/Section5'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  )
}

export default Home
