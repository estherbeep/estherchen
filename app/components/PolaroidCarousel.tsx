'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const PolaroidCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const polaroids = [
    {
      id: 1,
      image: "/1st.png", // You can replace with different photos
      caption: "Part-time nail artist 💅",
      rotation: -2
    },
    {
      id: 2,
      image: "/2nd.jpg",
      caption: "Tea addict ☕",
      rotation: 1
    },
    {
      id: 3,
      image: "/1st.png", // You can add more photos here
      caption: "Efficiency enthusiast ⚙️",
      rotation: -1
    },
    {
      id: 4,
      image: "/2nd.jpg",
      caption: "From Taiwan, learning the world! 🧳",
      rotation: 2
    },
    {
      id: 5,
      image: "/1st.png",
      caption: "Always curious 🧠",
      rotation: -1.5
    }
  ]

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % polaroids.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [polaroids.length])

  const currentPolaroid = polaroids[currentIndex]

  return (
    <section className="py-16 gradient-bg">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Life in Polaroids
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into my world beyond work
          </p>
        </motion.div>

        {/* Polaroid Container */}
        <div className="flex justify-center items-center min-h-[400px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPolaroid.id}
              initial={{ 
                opacity: 0, 
                scale: 0.8, 
                rotate: currentPolaroid.rotation + 10,
                y: 20
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: currentPolaroid.rotation,
                y: 0
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8, 
                rotate: currentPolaroid.rotation - 10,
                y: -20
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeInOut",
                type: "spring",
                stiffness: 100
              }}
              className="relative"
            >
              {/* Polaroid Frame */}
              <div className="bg-white p-4 pb-12 shadow-2xl border-2 border-gray-100 relative">
                {/* Photo */}
                <div className="w-64 h-64 relative overflow-hidden">
                  <Image
                    src={currentPolaroid.image}
                    alt={currentPolaroid.caption}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-2 left-4 right-4">
                  <p className="text-sm font-medium text-gray-800 text-center leading-tight">
                    {currentPolaroid.caption}
                  </p>
                </div>
              </div>

              {/* Polaroid Shadow */}
              <div 
                className="absolute inset-0 bg-gray-200 rounded-sm"
                style={{
                  transform: `translate(4px, 4px) rotate(${currentPolaroid.rotation}deg)`,
                  zIndex: -1
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-2 mt-8"
        >
          {polaroids.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gray-900 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </motion.div>

        {/* Auto-play indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <p className="text-xs text-gray-500">
            Auto-flipping every 5 seconds
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PolaroidCarousel
