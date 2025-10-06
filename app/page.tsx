'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, MapPin, Calendar, Award, Users, BookOpen, Target } from 'lucide-react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SeekingSection from './components/SeekingSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
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
      <div className="min-h-screen bg-beige-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-confetti-pink"></div>
      </div>
    )
  }

  return (
    <main className="relative overflow-hidden">
      <ConfettiBackground />
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection />
        <AboutSection />
        <SeekingSection />
        <ExperienceSection />
        <SkillsSection />
        <PersonalitySection />
        <ContactSection />
        <Footer />
      </motion.div>
    </main>
  )
}

