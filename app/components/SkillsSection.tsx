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
    <section id="skills" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-beige-900 mb-4">
            Top Skills
          </h2>
          <p className="text-lg text-beige-600 max-w-2xl mx-auto">
            Here's what I bring to the table
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-beige-50 rounded-xl p-4 hover:bg-beige-100 transition-colors duration-300 hover:shadow-md"
              >
                <span className="text-confetti-pink mt-1">•</span>
                <span className="text-lg font-medium text-beige-800">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

