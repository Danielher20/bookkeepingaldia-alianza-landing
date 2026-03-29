'use client'
import { motion, type Variants } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { fadeInUp } from '@/lib/animation-variants'

interface FadeInViewProps {
  children: React.ReactNode
  className?: string
  variant?: Variants
  delay?: number
  once?: boolean
  margin?: string
}

const reducedVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

export default function FadeInView({
  children,
  className,
  variant = fadeInUp,
  delay = 0,
  once = true,
  margin = '-80px',
}: FadeInViewProps) {
  const prefersReduced = useReducedMotion()
  const chosen = prefersReduced ? reducedVariant : variant

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={chosen}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  )
}
