'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const PersonalitySection = () => {
      const polaroids = [
        {
          id: 1,
          image: "/nail1.jpeg",
          caption: "Part Time Nail Artist",
          rotation: -2
        },
        {
          id: 2,
          image: "/travel1.jpeg",
          caption: "Travel",
          rotation: 1
        },
        {
          id: 3,
          image: "/cook1.jpeg",
          caption: "Cook to Survive",
          rotation: -1
        },
        {
          id: 4,
          image: "/travel2.jpeg",
          caption: "Travel",
          rotation: 2
        },
        {
          id: 5,
          image: "/nail2.jpeg",
          caption: "Part Time Nail Artist",
          rotation: -1.5
        },
        {
          id: 6,
          image: "/bunny1.jpeg",
          caption: "Bunny Owner",
          rotation: 1.5
        },
        {
          id: 7,
          image: "/cook2.jpeg",
          caption: "Cook to Survive",
          rotation: -0.5
        },
        {
          id: 8,
          image: "/travel3.JPEG",
          caption: "Travel",
          rotation: 0.8
        }
      ]

  return (
    <section className="section-padding gradient-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-8 leading-tight">
            Human Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-600">What Makes Me, Me</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Polaroid Reel - Authentic Vintage Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mb-16 min-h-[450px] relative overflow-hidden gradient-bg"
          >
            {/* Scrolling Container */}
            <div className="relative w-full h-[450px] overflow-hidden">
              <motion.div
                className="flex items-center space-x-12 h-full"
                animate={{
                  x: [0, -polaroids.length * 360] // 360px per photo including spacing
                }}
                transition={{
                  duration: polaroids.length * 5, // 5 seconds per photo
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* First set of photos */}
                {polaroids.map((polaroid, index) => (
                  <motion.div
                    key={`first-${polaroid.id}`}
                    className="flex-shrink-0"
                    style={{
                      transform: `rotate(${polaroid.rotation}deg)`,
                      transformOrigin: "center center"
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      rotate: polaroid.rotation + 1,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {/* Authentic Polaroid Frame */}
                    <div 
                      className="bg-white relative transition-all duration-300"
                      style={{ 
                        width: '300px', 
                        height: '380px',
                        borderRadius: '16px',
                        paddingTop: '16px',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        paddingBottom: '60px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {/* Photo */}
                      <div className="w-full h-64 relative overflow-hidden rounded-lg">
                        <Image
                          src={polaroid.image}
                          alt={polaroid.caption}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      
                      {/* Caption */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <p 
                          className="text-base text-gray-600 text-center leading-relaxed" 
                          style={{ 
                            fontFamily: "'Dancing Script', cursive",
                            fontWeight: '400'
                          }}
                        >
                          {polaroid.caption}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Duplicate set for seamless loop */}
                {polaroids.map((polaroid, index) => (
                  <motion.div
                    key={`second-${polaroid.id}`}
                    className="flex-shrink-0"
                    style={{
                      transform: `rotate(${polaroid.rotation}deg)`,
                      transformOrigin: "center center"
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      rotate: polaroid.rotation + 1,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {/* Authentic Polaroid Frame */}
                    <div 
                      className="bg-white relative transition-all duration-300"
                      style={{ 
                        width: '300px', 
                        height: '380px',
                        borderRadius: '16px',
                        paddingTop: '16px',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        paddingBottom: '60px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {/* Photo */}
                      <div className="w-full h-64 relative overflow-hidden rounded-lg">
                        <Image
                          src={polaroid.image}
                          alt={polaroid.caption}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      
                      {/* Caption */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <p 
                          className="text-base text-gray-600 text-center leading-relaxed" 
                          style={{ 
                            fontFamily: "'Dancing Script', cursive",
                            fontWeight: '400'
                          }}
                        >
                          {polaroid.caption}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>


          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Putting myself out here with this little project might be the bravest thing I've ever done. 
                So if you've taken a moment to stop by, thank you, really.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                I hope your day's going just as well as you deserve!
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Whether you're working in a big firm, building something of your own, or a student like me 
                figuring things out, I'd genuinely love to connect. Every conversation brings a new perspective, 
                and I think that's something precious!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PersonalitySection