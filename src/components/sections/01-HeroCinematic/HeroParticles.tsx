'use client'
import { motion } from 'framer-motion'

// Deterministic particle positions — no Math.random() to ensure SSR consistency
const PARTICLES = [
  { x: 8, y: 15, size: 2, opacity: 0.25, delay: 0 },
  { x: 22, y: 72, size: 1.5, opacity: 0.18, delay: 0.8 },
  { x: 41, y: 33, size: 2.5, opacity: 0.3, delay: 1.4 },
  { x: 58, y: 88, size: 1, opacity: 0.15, delay: 0.3 },
  { x: 67, y: 12, size: 2, opacity: 0.22, delay: 1.9 },
  { x: 73, y: 55, size: 1.5, opacity: 0.2, delay: 0.6 },
  { x: 85, y: 78, size: 2, opacity: 0.18, delay: 1.1 },
  { x: 92, y: 28, size: 1, opacity: 0.28, delay: 2.2 },
  { x: 15, y: 48, size: 1.5, opacity: 0.15, delay: 1.7 },
  { x: 35, y: 91, size: 2, opacity: 0.2, delay: 0.4 },
  { x: 52, y: 19, size: 1, opacity: 0.25, delay: 1.3 },
  { x: 78, y: 42, size: 2.5, opacity: 0.18, delay: 0.9 },
  { x: 96, y: 65, size: 1.5, opacity: 0.22, delay: 2.0 },
  { x: 4, y: 83, size: 2, opacity: 0.15, delay: 0.5 },
  { x: 48, y: 61, size: 1, opacity: 0.2, delay: 1.6 },
  { x: 88, y: 8, size: 2, opacity: 0.28, delay: 0.2 },
  { x: 31, y: 5, size: 1.5, opacity: 0.18, delay: 1.8 },
  { x: 63, y: 96, size: 1, opacity: 0.15, delay: 0.7 },
]

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-light"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -14, 0],
            opacity: [p.opacity, p.opacity * 1.6, p.opacity],
          }}
          transition={{
            duration: 4 + p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
}
