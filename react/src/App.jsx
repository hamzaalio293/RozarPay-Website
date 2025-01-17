import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Features from './Components/Features' 
import FeatureCards from './Components/FeatureCards'
import FeatureContext from './Components/FeatureContext'
import Logoanimation from './Components/Logoanimation'
import Taskbar from './Components/Taskbar'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <FeatureCards />
      <FeatureContext />
      <Logoanimation/>
      <Taskbar />
      <Footer />
    </>
  )
}

export default App
