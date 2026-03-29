'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'green'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  target?: string
}

export default function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  href,
  onClick,
  className,
  target,
}: CTAButtonProps) {
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const variants = {
    primary: cn(
      'shimmer-btn font-semibold rounded-full text-bg-void',
      'bg-gradient-gold shadow-gold-glow hover:shadow-[0_0_50px_rgba(242,201,76,0.55)]',
      'transition-all duration-300'
    ),
    ghost: cn(
      'font-medium rounded-full border border-white/20 text-white',
      'hover:border-white/40 hover:bg-white/5 transition-all duration-300'
    ),
    green: cn(
      'shimmer-btn font-semibold rounded-full text-white',
      'bg-gradient-green shadow-green-glow hover:shadow-[0_0_50px_rgba(100,190,146,0.45)]',
      'transition-all duration-300'
    ),
  }

  const base = cn(
    'inline-flex items-center gap-2.5 cursor-pointer select-none',
    sizes[size],
    variants[variant],
    className
  )

  const inner = (
    <>
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={base}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={base}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {inner}
    </motion.button>
  )
}
