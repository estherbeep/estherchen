'use client'

import { motion } from 'framer-motion'
import { 
  FileSpreadsheet, 
  FileText, 
  Palette, 
  Presentation, 
  Brain, 
  TrendingUp,
  Code,
  Database,
  Zap,
  BarChart3
} from 'lucide-react'

const ToolsCarousel = () => {
  const tools = [
    { name: 'Python', icon: Code, color: 'text-blue-600' },
    { name: 'Excel', icon: FileSpreadsheet, color: 'text-green-600' },
    { name: 'Google Sheets', icon: FileSpreadsheet, color: 'text-green-500' },
    { name: 'Cursor', icon: Code, color: 'text-purple-600' },
    { name: 'v0', icon: Zap, color: 'text-orange-500' },
    { name: 'Figma', icon: Palette, color: 'text-pink-500' },
    { name: 'PowerPoint', icon: Presentation, color: 'text-orange-600' },
    { name: 'Notion', icon: FileText, color: 'text-gray-700' },
    { name: 'ChatGPT', icon: Brain, color: 'text-green-500' },
    { name: 'Bloomberg', icon: TrendingUp, color: 'text-yellow-600' }
  ]

  return (
    <section className="py-16 gradient-bg">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Tools I Use
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and platforms I work with daily
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-pinkish-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-peach-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Icons */}
          <motion.div
            className="flex items-center space-x-12 py-8"
            animate={{
              x: [0, -100 * tools.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {/* First set of icons */}
            {tools.map((tool, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex flex-col items-center space-y-2 min-w-[80px]"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300">
                  <tool.icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                  {tool.name}
                </span>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {tools.map((tool, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex flex-col items-center space-y-2 min-w-[80px]"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300">
                  <tool.icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ToolsCarousel
