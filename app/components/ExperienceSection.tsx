'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Users, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const professionalExperience = [
    {
      id: 'maple-leaf',
      title: 'Student Consultant',
      company: 'Maple Leaf Foods',
      period: '2025 (Ongoing)',
      location: 'Toronto, ON',
      shortDescription: 'Analyzing supply chain efficiency and providing data-driven recommendations for a major food corporation',
      description: [
        'Collaborating with a team of student consultants to assess supply chain efficiency and provide recommendations',
        'Conducting market and operations research to identify potential improvements'
      ],
      reflection: "This is my first time working with a multinational company. I've found it both challenging and exciting to dig into large data sets and learn how real supply chains are managed, while pushing myself to communicate clearly with both teammates and stakeholders!"
    },
    {
      id: 'reciprocity',
      title: 'Consultant',
      company: 'Reciprocity',
      period: 'Apr–Jun 2025',
      location: 'Cape Town, South Africa',
      shortDescription: 'Led cross-cultural team to develop tailored bookkeeping system, projected to increase operational efficiency by 35%',
      description: [
        'Spearheaded development of a tailored bookkeeping system and branding plan for a local social enterprise, projected to increase operational efficiency by 35%',
        'Collaborated with a cross-cultural team of 5+ nationalities and engaged directly with senior decision-makers'
      ],
      reflection: "Seeing our recommendations come to life, and still being used today made this one of the most rewarding projects I've worked on! I learned so much from my colleagues with different cultural perspectives and came away with a deeper respect for practical, sustainable solutions."
    }
  ]

  const leadershipRoles = [
    {
      id: 'scmg',
      title: 'Director of Corporate Relations',
      organization: 'UofT Supply Chain Management Group',
      period: 'Sep 2024–Present',
      shortDescription: 'Leading corporate outreach initiatives and event coordination, achieving 18% increase in participant sign-ups',
      description: [
        'Initiating a new outreach system to improve response rates and stakeholder relationships after being promoted from Marketing Manager to lead corporate outreach and professional engagement',
        'Coordinated logistics and marketing support for 3 SCMG events with 40+ participants, increasing sign-ups by 18%'
      ],
      reflection: "Stepping into a leadership role has challenged me to grow quickly. I'm learning to delegate more effectively, support my team's growth, and build stronger connections with professionals in the industry."
    },
    {
      id: 'rocaut',
      title: 'Operations Executive',
      organization: 'UofT Taiwanese Student Association (ROCSAUT)',
      period: 'May 2025–Present',
      shortDescription: 'Streamlined operations through automation, saving 3+ hours of manual work weekly while improving efficiency',
      description: [
        'Developed and implemented an automated system for membership management and event registration, reducing manual workload by 3 hours/week',
        'Managed cross-functional teams to execute 5+ cultural and professional events, enhancing student engagement'
      ],
      reflection: "This role has been a deep dive into practical operations and automation. I've enjoyed finding creative ways to make processes more efficient, which directly translates to more time for impactful initiatives and better experiences for our members."
    }
  ]

  const additionalExperience = [
    {
      id: 'nail-tech',
      title: 'Nail Tech',
      company: 'Haidilao Hot Pot',
      category: 'Customer Service',
      shortDescription: 'Thrived in a fast-paced, customer-centric environment where service quality and efficiency shaped customer satisfaction',
      description: [
        'Thrived in a fast-paced, customer-centric environment where service quality and efficiency shaped customer satisfaction'
      ]
    },
    {
      id: 'sales-assistant',
      title: 'Sales Assistant',
      company: 'Pet Product Retail',
      category: 'Retail Experience',
      shortDescription: 'Advised customers on products, handled sales, and tailored recommendations to individual needs',
      description: [
        'Advised customers on products, handled sales, and tailored recommendations to individual needs'
      ]
    }
  ]

  const toggleExpanded = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  const SimpleExperienceCard = ({ experience }: { experience: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 mb-8 p-8 hover:shadow-lg rounded-2xl"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-gray-900" />
            <h3 className="text-lg font-semibold text-gray-900">{experience.title}</h3>
          </div>
          <h4 className="text-base font-medium text-pink-600 mb-1">
            {experience.company || experience.organization}
          </h4>
        </div>
        {/* Added category as per screenshot */}
        <span className="text-sm text-gray-500">{experience.category}</span>
      </div>

      {/* Short Description */}
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        <span className="text-pink-600 mr-2">•</span> {/* Pink bullet point */}
        {experience.shortDescription}
      </p>
    </motion.div>
  )

  const ExperienceCard = ({ experience, type }: { experience: any, type: string }) => {
    const isExpanded = expandedCard === experience.id

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 mb-8 p-8 hover:shadow-lg rounded-2xl"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-gray-900" />
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wider">{experience.title}</h3>
            </div>
            <h4 className="text-base font-medium text-gray-700 mb-1">
              {experience.company || experience.organization}
            </h4>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          {experience.shortDescription}
        </p>

        {/* Toggle Button */}
        <button
          onClick={() => toggleExpanded(experience.id)}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-900 hover:bg-gray-800 transition-colors duration-300 text-white font-medium text-sm rounded-full"
        >
          <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {/* Expanded Content with Smooth Animation */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-gray-200">
                {/* Detailed Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mb-6"
                >
                  <h5 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wider">Key Responsibilities:</h5>
                  <ul className="space-y-3">
                    {experience.description.map((item: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        className="text-sm text-gray-600 flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Reflection */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h5 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">My Reflection:</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {experience.reflection}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }

  return (
    <section id="experience" className="section-padding gradient-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional roles and leadership positions that shaped my journey
          </p>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3 uppercase tracking-wider">
              <Briefcase className="w-6 h-6 text-gray-900" />
              Professional Experience
            </h3>
            <p className="text-gray-600">Real-world consulting and business experience</p>
          </motion.div>

          <div className="space-y-6">
            {professionalExperience.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} type="professional" />
            ))}
          </div>
        </div>

        {/* Leadership Roles */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3 uppercase tracking-wider">
              <Users className="w-6 h-6 text-gray-900" />
              Leadership Roles
            </h3>
            <p className="text-gray-600">Driving impact through student organizations</p>
          </motion.div>

          <div className="space-y-6">
            {leadershipRoles.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} type="leadership" />
            ))}
          </div>
        </div>

        {/* Additional Experience */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3 uppercase tracking-wider">
              <Briefcase className="w-6 h-6 text-gray-900" />
              Additional Experience
            </h3>
            <p className="text-gray-600">Diverse roles and valuable lessons</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalExperience.map((experience) => (
              <SimpleExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection