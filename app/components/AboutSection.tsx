'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Heart, Target, Users } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id="about" className="section-padding gradient-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-8 leading-tight">
                About Me
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  Hi! I'm Esther Chen, a junior at the University of Toronto studying Finance, Data Science, and Strategy. Over the past two years, I've been involved in student clubs and consulting projects. I love taking on new challenges, even when they push me outside my comfort zone. Whenever I'm committed to something, I always aim to make it grow, improve, and run more efficiently than before.
                </p>
                <p>
                  I'm the kind of person who gets weirdly excited about making things work better. Recently, I've been building Excel macros, vibe coding (like this website!), and exploring AI agents. I get genuinely excited about automation and efficiency; there's something satisfying about turning "this takes forever" into "this takes 30 seconds."
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-4">
                <p className="font-semibold text-gray-800 text-lg">Bachelor of Commerce in Management</p>
                <p className="text-gray-600">University of Toronto • Expected Graduation: 2027</p>
                <p className="text-sm text-gray-500">Focus: Finance, Data Science, and Strategy; Minor in Economics</p>
                <p className="text-sm text-gray-700 font-medium">Dean's List 2024/2025</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image */}
              <div className="w-full aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden border-2 border-gray-200 shadow-2xl">
                <Image
                  src="/shine.jpeg"
                  alt="Esther Chen"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection