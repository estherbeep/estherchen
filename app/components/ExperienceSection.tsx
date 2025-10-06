'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, Calendar, MapPin } from 'lucide-react'

const ExperienceSection = () => {
  const professionalExperience = [
    {
      title: 'Student Consultant',
      company: 'Maple Leaf Foods',
      period: '2025 (Ongoing)',
      location: 'Toronto, ON',
      description: [
        'Collaborating with a team of student consultants to assess supply chain efficiency and provide recommendations',
        'Conducting market and operations research to identify potential improvements'
      ],
      reflection: "This is my first time working with a multinational company. I've found it both challenging and exciting to dig into large data sets and learn how real supply chains are managed, while pushing myself to communicate clearly with both teammates and stakeholders!"
    },
    {
      title: 'Consultant',
      company: 'Reciprocity',
      period: 'Apr–Jun 2025',
      location: 'Cape Town, South Africa',
      description: [
        'Spearheaded development of a tailored bookkeeping system and branding plan for a local social enterprise, projected to increase operational efficiency by 35%',
        'Collaborated with a cross-cultural team of 5+ nationalities and engaged directly with senior decision-makers'
      ],
      reflection: "Seeing our recommendations come to life, and still being used today made this one of the most rewarding projects I've worked on! I learned so much from my colleagues with different cultural perspectives and came away with a deeper respect for practical, sustainable solutions."
    }
  ]

  const leadershipRoles = [
    {
      title: 'Director of Corporate Relations',
      organization: 'UofT Supply Chain Management Group',
      period: 'Sep 2024–Present',
      description: [
        'Initiating a new outreach system to improve response rates and stakeholder relationships after being promoted from Marketing Manager to lead corporate outreach and professional engagement',
        'Coordinated logistics and marketing support for 3 SCMG events with 40+ participants, increasing sign-ups by 18%'
      ],
      reflection: "Stepping into a leadership role has challenged me to grow quickly. I'm learning to delegate more effectively, support my team's growth, and build stronger connections with professionals in the industry."
    },
    {
      title: 'Operations Executive',
      organization: 'UofT Taiwanese Student Association (ROCSAUT)',
      period: 'May 2025–Present',
      description: [
        'Automated the e-wallet pass issuing process (saving ~3 hours of manual work per week), and initiated plans for a more efficient reimbursement and budget-tracking system',
        'Supported collaborations with sponsors and other TSAs to strengthen partnerships and expand reach'
      ],
      reflection: "I take strong ownership of this role as the club represents my culture, and I want to see it thrive. It's rewarding to know my contributions have made operations smoother and our events more engaging, helping build a real 'home away from home' for our members."
    }
  ]

  const additionalExperience = [
    {
      title: 'Nail Tech',
      company: 'Haidilao Hot Pot',
      period: 'Customer Service',
      description: [
        'Thrived in a fast-paced, customer-centric environment where service quality and efficiency shaped customer satisfaction'
      ],
      reflection: ""
    },
    {
      title: 'Sales Assistant',
      company: 'Pet Product Retail',
      period: 'Retail Experience',
      description: [
        'Advised customers on products, handled sales, and tailored recommendations to individual needs'
      ],
      reflection: ""
    }
  ]

  const ExperienceCard = ({ experience, index }: { experience: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 border border-beige-200 hover:shadow-lg transition-all duration-300 hover:border-confetti-pink/30"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-beige-900 mb-1">{experience.title}</h3>
          <p className="text-confetti-pink font-medium">{experience.company || experience.organization}</p>
        </div>
        <div className="text-right text-sm text-beige-600">
          <p className="font-medium">{experience.period}</p>
          {experience.location && (
            <div className="flex items-center space-x-1 mt-1">
              <MapPin className="w-3 h-3" />
              <span>{experience.location}</span>
            </div>
          )}
        </div>
      </div>
      
      <ul className="space-y-2 mb-4">
        {experience.description.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start space-x-2 text-beige-700">
            <span className="text-confetti-pink mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      {experience.reflection && (
        <div className="bg-beige-50 rounded-xl p-4 border-l-4 border-confetti-pink/30">
          <p className="text-beige-700 italic text-sm leading-relaxed">{experience.reflection}</p>
        </div>
      )}
    </motion.div>
  )

  return (
    <section id="experience" className="section-padding bg-beige-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-beige-900 mb-4">
            My Experience
          </h2>
          <p className="text-lg text-beige-600 max-w-2xl mx-auto">
            Building expertise through hands-on experience and leadership roles
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Professional Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-8"
            >
              <Briefcase className="w-6 h-6 text-confetti-pink" />
              <h3 className="text-2xl font-semibold text-beige-900">Professional Experience</h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {professionalExperience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Leadership Roles */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-8"
            >
              <Users className="w-6 h-6 text-confetti-yellow" />
              <h3 className="text-2xl font-semibold text-beige-900">Leadership & Clubs</h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {leadershipRoles.map((role, index) => (
                <ExperienceCard key={index} experience={role} index={index} />
              ))}
            </div>
          </div>

          {/* Additional Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-8"
            >
              <Briefcase className="w-6 h-6 text-confetti-yellow" />
              <h3 className="text-2xl font-semibold text-beige-900">Additional Experience</h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {additionalExperience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

