'use client'
import { motion, type Variants } from 'framer-motion'

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  fast?: boolean
  delay?: number
  once?: boolean
}

export default function StaggerChildren({
  children,
  className,
  fast = false,
  delay = 0,
  once = true,
}: StaggerChildrenProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: fast ? 0.055 : 0.1,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
