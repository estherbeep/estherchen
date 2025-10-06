'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Heart, Target, Users } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  const traits = [
    { icon: Target, text: 'Ownership', color: 'text-confetti-blue' },
    { icon: Heart, text: 'Diligence', color: 'text-confetti-purple' },
    { icon: Users, text: 'Adaptability', color: 'text-confetti-blue' },
    { icon: GraduationCap, text: 'Curiosity', color: 'text-confetti-purple' },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-beige-900 mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-beige-700 leading-relaxed">
                <p>
                  I'm someone who believes in taking ownership. When I commit to something, I love 
                  seeing it grow, improve, and run more efficiently than before. Whether it's leading 
                  a project, optimizing a process, or finding a smarter way to solve everyday problems, 
                  I'm driven by the idea of making things work better.
                </p>
                <p>
                  Lately, I've found myself fascinated by automation, from simple Excel macros to AI 
                  agents and algorithmic trading. It's opened a new way of thinking for me! I'm still 
                  exploring, but I love learning from people who build, question, and share that 
                  same curiosity.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-beige-50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="w-6 h-6 text-confetti-pink" />
                <h3 className="text-xl font-semibold text-beige-900">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-beige-800">Bachelor of Commerce in Management</p>
                <p className="text-beige-600">University of Toronto • Expected Graduation: 2027</p>
                <p className="text-sm text-beige-500">Focus: Finance, Data Science, and Strategy; Minor in Economics</p>
                <p className="text-sm text-confetti-pink font-medium">Dean's List 2024/2025</p>
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
              {/* Main Image Placeholder */}
              <div className="w-full aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden border-4 border-confetti-pink/30">
                <Image
                  src="/2nd.jpg"
                  alt="Esther Chen in Taipei"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-confetti-yellow/20 rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl">💡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-confetti-blue/20 rounded-full flex items-center justify-center animate-confetti">
                <span className="text-xl">📈</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

