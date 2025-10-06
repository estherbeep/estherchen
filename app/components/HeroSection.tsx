'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Sparkles } from 'lucide-react'

const HeroSection = () => {
  const nameGradientClass = 'gradient-text'
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-end sm:items-center justify-center relative overflow-hidden pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-24 md:pb-28">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige-50 via-beige-100 to-beige-200"></div>
      
      {/* Floating Accents (subtle) */}
      <div className="absolute top-24 left-10 w-2 h-2 bg-confetti-blue rounded-full animate-float opacity-40"></div>
      <div className="absolute top-36 right-16 w-2 h-2 bg-confetti-yellow rounded-full animate-confetti opacity-40"></div>

      <div className="container-max relative z-10 mt-4 sm:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-center"
        >
          {/* Badge removed per request */}

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance"
          >
            Hi, I'm{' '}
            <span className={nameGradientClass}>Esther</span>
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl font-normal text-beige-700">
              Welcome to my birthday project 🎉
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg text-beige-600 max-w-3xl mx-auto leading-relaxed"
          >
            Birthdays mark milestones. This year, I'm shooting my shot for an internship opportunity in{' '}
            <span className="font-semibold text-beige-800">finance & consulting</span>
            . Hope your day's going really well, by the way ☀️
          </motion.p>

          {/* Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-beige-200/70">
              <Image
                src="/1st.png"
                alt="Esther Chen portrait"
                fill
                priority
                className="object-cover rounded-full origin-center scale-[1]"
                style={{ objectPosition: 'center 50%' }}
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-confetti-purple/30 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-lg">🎂</span>
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-beige-200"
          >
            <p className="text-lg font-medium text-beige-800">
              Rotman Commerce student @ <span className="text-beige-900 font-semibold">[the University of Toronto]</span>
            </p>
            <div className="mt-4">
              <p className="text-beige-900 font-semibold text-base sm:text-lg inline-flex items-center px-4 py-2 rounded-full bg-beige-100 border border-beige-200">
                Diligent, curious, and always taking ownership
              </p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            onClick={scrollToNext}
            className="inline-flex items-center space-x-2 pill mx-auto bg-ink-900 text-cream-50 hover:bg-ink-800 transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">Learn about me in 5 minutes!</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
