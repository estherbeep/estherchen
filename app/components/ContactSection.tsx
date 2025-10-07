'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, Heart, Sparkles } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    intention: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree URL
      const response = await fetch('https://formspree.io/f/xblzkqdb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          intention: formData.intention,
          message: formData.message,
        }),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', company: '', email: '', intention: '', message: '' })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // You could add error handling here
    } finally {
      setIsSubmitting(false)
    }
  }

  const intentions = [
    'Have a potential opportunity for you!',
    'Reach out and we can chat about it!',
    'Just wanted to say Happy Birthday 🎉',
    'Other'
  ]

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-gradient-to-br from-confetti-pink/10 to-confetti-yellow/10">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-confetti-pink/20 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-confetti-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-confetti-pink" />
              </div>
              <h3 className="text-2xl font-bold text-beige-900 mb-4">Thank You! 🎉</h3>
              <p className="text-lg text-beige-700">
                Your message has been sent! I'll reach out personally to connect with you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding gradient-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thank you for visiting my birthday project and for scrolling this far. It means a lot!
          </p>
          <p className="text-gray-600 mt-4">
            If you'd like to connect, share a little about yourself below — I'll reach out personally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form action="https://formspree.io/f/xblzkqdb" method="POST" className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 shadow-lg rounded-2xl">
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-display font-medium text-black-700 mb-2 uppercase tracking-wider">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-gray-300 transition-colors duration-300 bg-white rounded-xl"
                  placeholder="Your name"
                />
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-display font-medium text-black-700 mb-2 uppercase tracking-wider">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-gray-300 transition-colors duration-300 bg-white rounded-xl"
                  placeholder="Your company or organization"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-display font-medium text-black-700 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-gray-300 transition-colors duration-300 bg-white rounded-xl"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Intention Dropdown */}
              <div>
                <label htmlFor="intention" className="block text-sm font-display font-medium text-black-700 mb-2 uppercase tracking-wider">
                  What brings you here?
                </label>
                <select
                  id="intention"
                  name="intention"
                  value={formData.intention}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-gray-300 transition-colors duration-300 bg-white rounded-xl"
                >
                  <option value="">Select an option</option>
                  {intentions.map((intention, index) => (
                    <option key={index} value={intention}>
                      {intention}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-beige-700 mb-2">
                  Anything you'd like to share?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-black-200 focus:ring-2 focus:ring-black-900 focus:border-transparent transition-colors duration-300 bg-white resize-none"
                  placeholder="Share any thoughts, questions, or just say hi!"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-900 text-white py-4 font-semibold text-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rounded-full"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send 🎂</span>
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

