'use client'
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, animate, useTransform } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  decimals?: number
}

export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 1.5,
  className,
  decimals = 0,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { threshold: 0.3 })
  const count = useMotionValue(0)
  const display = useTransform(count, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
  )

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, {
      duration,
      ease: [0.25, 0.4, 0.25, 1],
    })
    return controls.stop
  }, [inView, value, duration, count])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}
