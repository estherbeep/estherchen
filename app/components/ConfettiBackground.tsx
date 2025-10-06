'use client'

import { motion } from 'framer-motion'

const ConfettiBackground = () => {
  const confettiPieces = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: ['confetti-pink', 'confetti-yellow', 'confetti-blue', 'confetti-purple', 'confetti-orange'][Math.floor(Math.random() * 5)],
    size: Math.random() * 3 + 2,
    delay: Math.random() * 3,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className={`absolute w-${Math.floor(piece.size)} h-${Math.floor(piece.size)} bg-${piece.color} rounded-full opacity-30`}
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 90, 180],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: piece.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default ConfettiBackground
