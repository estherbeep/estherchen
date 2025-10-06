'use client'

import { motion } from 'framer-motion'
import { Heart, Sparkles, Coffee, BookOpen } from 'lucide-react'

const PersonalitySection = () => {
  const funFacts = [
    { text: "💅 Part Time Nail Artist", color: "text-confetti-pink" },
    { text: "☕ Tea Addict", color: "text-confetti-yellow" },
    { text: "⚙️ Efficiency Enthusiast", color: "text-confetti-pink" },
    { text: "🧳 From Taiwan, Learning the World!", color: "text-confetti-yellow" },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-beige-50 to-beige-100">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-beige-900 mb-4">
            Human Touch – What Makes Me, Me
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Fun Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-beige-200"
              >
                <div className="text-4xl mb-4">{fact.text.split(' ')[0]}</div>
                <p className={`text-lg font-semibold ${fact.color} leading-tight`}>
                  {fact.text.split(' ').slice(1).join(' ')}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-beige-200 max-w-4xl mx-auto">
              <p className="text-lg text-beige-800 leading-relaxed mb-4">
                Putting myself out here with this little project might be the bravest thing I've ever done. 
                So if you've taken a moment to stop by, thank you, really.
              </p>
              <p className="text-lg text-beige-700 italic mb-4">
                I hope your day's going just as well as you deserve!
              </p>
              <p className="text-lg text-beige-800 leading-relaxed">
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

