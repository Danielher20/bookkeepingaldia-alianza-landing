'use client'
import { motion, useSpring } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function SalesProgress() {
  const raw = useScrollProgress()
  const progress = useSpring(raw, { stiffness: 200, damping: 30 })

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/5">
      <motion.div
        className="h-full origin-left rounded-full"
        style={{
          scaleX: progress,
          background: 'linear-gradient(90deg, #64BE92 0%, #297A57 50%, #F2C94C 100%)',
        }}
      />
    </div>
  )
}
