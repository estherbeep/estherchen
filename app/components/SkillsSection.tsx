'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, BarChart3, Lightbulb, Globe } from 'lucide-react'

const SkillsSection = () => {
  const skills = [
    'Data Analysis (Excel, Solver, Pivot Tables)',
    'Process Optimization & Automation',
    'Financial Modeling',
    'Project Management & Cross-Team Coordination',
    'Campaign Planning & Brand Communication',
    'Problem-Solving & Strategic Thinking',
    'Stakeholder Communication & Client Relations',
    'Ownership-Driven & Adaptable under Pressure'
  ]

  return (
    <section id="skills" className="section-padding gradient-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-8 leading-tight">
            Top Skills
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Here's what I bring to the table
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 p-4 sm:p-6 hover:shadow-lg rounded-2xl"
              >
                <span className="text-gray-900 mt-1 font-bold text-sm">•</span>
                <span className="text-sm sm:text-lg font-medium text-gray-800">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection