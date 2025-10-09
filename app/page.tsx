'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ToolsCarousel from './components/ToolsCarousel'
import ExperienceSection from './components/ExperienceSection'
import SeekingSection from './components/SeekingSection'
import PersonalitySection from './components/PersonalitySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ConfettiBackground from './components/ConfettiBackground'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen">
      <ConfettiBackground />
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ToolsCarousel />
        <ExperienceSection />
        <SeekingSection />
        <PersonalitySection />
        <ContactSection />
        <Footer />
      </motion.div>
    </main>
  )
}