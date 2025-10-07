'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, BarChart3, Lightbulb, Settings } from 'lucide-react'

const SeekingSection = () => {
  const opportunities = [
    {
      icon: BarChart3,
      title: 'Finance & Strategy',
      points: [
      'Financial analysis & insights',
      'Value creation & sustainability',
      'Data-driven storytelling',
    ],
    },
    {
      icon: Lightbulb,
      title: 'Consulting & Problem Solving',
      points: [
      'Structured problem-solving',
      'Team collaboration',
      'Growth through clarity',
    ],
    },
    {
      icon: Settings,
      title: 'Operations & Automation',
      points: [
      'Process optimization',
      'AI & automation tools',
      'Creative efficiency solutions',
    ],
    },
  ]

  return (
    <section id="seeking" className="section-padding gradient-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-8 leading-tight">
            What I'm Seeking
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Internship opportunities in these areas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 p-6 sm:p-8 hover:shadow-lg rounded-2xl"
            >
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <opp.icon className="w-5 h-5 sm:w-7 sm:h-7 text-gray-900" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">{opp.title}</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-gray-600">
                {opp.points.map((p: string, i: number) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-900 flex-shrink-0"></span>
                    <span className="text-xs sm:text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Location & Timing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 max-w-4xl mx-auto rounded-2xl shadow-lg"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-gray-900" />
                  <div>
                    <span className="font-semibold text-gray-900">Time:</span>
                    <span className="text-gray-600 ml-2">Summer 2026</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-gray-900" />
                  <div>
                    <span className="font-semibold text-gray-900">Location:</span>
                    <span className="text-gray-600 ml-2">Toronto, Canada</span>
                  </div>
                </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SeekingSection