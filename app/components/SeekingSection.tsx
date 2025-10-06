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
    <section id="seeking" className="section-padding bg-gradient-to-br from-confetti-pink/5 to-confetti-yellow/5">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-beige-900 mb-4">
            What I'm Seeking
          </h2>
          <p className="text-lg text-beige-600 max-w-2xl mx-auto">
            Internship opportunities in these areas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-beige-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <opp.icon className="w-7 h-7 text-confetti-pink" />
                <h3 className="text-lg font-semibold text-beige-900">{opp.title}</h3>
              </div>
              <ul className="space-y-3 text-beige-700">
                {opp.points.map((p: string, i: number) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-confetti-yellow flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">{p}</span>
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
          className="bg-white rounded-2xl p-8 shadow-sm border border-beige-200 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-beige-900 mb-6 text-center">Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-confetti-pink" />
                  <div>
                    <span className="font-semibold text-beige-900">Time:</span>
                    <span className="text-beige-700 ml-2">Summer 2026</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-confetti-yellow" />
                  <div>
                    <span className="font-semibold text-beige-900">Location:</span>
                    <span className="text-beige-700 ml-2">Toronto, Canada</span>
                  </div>
                </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SeekingSection
