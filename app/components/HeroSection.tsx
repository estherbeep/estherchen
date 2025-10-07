'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown, Sparkles, MapPin, Calendar } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden pt-20 px-4 sm:px-6 lg:px-8">
      <div className="container-max relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-4 leading-tight">
              Hi, I'm Esther!
            </h1>
            <div className="text-2xl sm:text-3xl font-medium text-orange-600 mt-4">
              Welcome to my birthday project!
            </div>
          </motion.div>

          {/* Profile Picture - Right under Welcome text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center relative mb-8"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Main Photo - Circular */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/1st.png"
                  alt="Esther Chen"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 7%' }}
                  priority
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-white border border-gray-200 px-4 py-2 shadow-lg rounded-full"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
                </div>
              </motion.div>

              {/* Specialization Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -bottom-4 -left-4 bg-white border border-gray-200 px-4 py-2 shadow-lg rounded-full"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Finance & Consulting</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
              Birthdays mark milestones. This year, I'm shooting my shot for an internship opportunity in finance & consulting. Hope your day's going really well, by the way ✨
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mb-12"
          >
            <a
              href="#about"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
            >
              Learn about me in 5 minutes!
              <ChevronDown className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Summer 2026</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Toronto</div>
              <div className="text-sm text-gray-600">Location</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Finance</div>
              <div className="text-sm text-gray-600">Focus</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection