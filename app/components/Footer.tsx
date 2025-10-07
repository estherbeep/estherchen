'use client'

import { motion } from 'framer-motion'
import { Heart, Linkedin, Mail, FileText } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Main Footer Content */}
          <div>
            <h3 className="text-2xl font-bold mb-2">ESTHER CHEN</h3>
            <p className="text-gray-300 mb-6">
              © 2025 Esther Chen | Birthday Internship Project
            </p>
          </div>

          {/* Birthday Message */}
          <div className="pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
              <Heart className="w-4 h-4 text-white" />
              <span>Made with love on my birthday</span>
              <span className="text-white">🎂</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer