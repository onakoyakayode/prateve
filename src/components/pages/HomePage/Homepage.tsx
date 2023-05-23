import React from 'react'
import Navbar from '../../../Reusables/Navbar'
import Hero from './sections/Hero'
import Empower from './sections/Empower'
import Footer from '../../../Reusables/Footer'

const Homepage = () => {
  return (
    <div className='text-[black]'>
      <Navbar />
      <Hero />
      <Empower />
      <Footer />
    </div>
  )
}

export default Homepage
