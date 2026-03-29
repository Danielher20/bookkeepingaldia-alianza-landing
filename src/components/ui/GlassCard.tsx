'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glow?: 'green' | 'gold' | 'none'
  hover?: boolean
  as?: 'div' | 'article' | 'li'
}

export default function GlassCard({
  children,
  className,
  glow = 'none',
  hover = false,
  as: Tag = 'div',
}: GlassCardProps) {
  const base = cn(
    'rounded-xl border border-white/[0.08] backdrop-blur-lg',
    'shadow-glass',
    glow === 'green' && 'shadow-green-glow',
    glow === 'gold' && 'shadow-gold-glow',
    className
  )

  const style: React.CSSProperties = {
    background: 'rgba(14, 61, 44, 0.42)',
  }

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -8, transition: { type: 'spring', stiffness: 380, damping: 26 } }}
        className={base}
        style={style}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <Tag className={base} style={style}>
      {children}
    </Tag>
  )
}
