'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxLayerProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export default function ParallaxLayer({ children, speed = 0.4, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const pct = speed * 100
  const y = useTransform(scrollYProgress, [0, 1], [`-${pct * 0.5}%`, `${pct * 0.5}%`])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
