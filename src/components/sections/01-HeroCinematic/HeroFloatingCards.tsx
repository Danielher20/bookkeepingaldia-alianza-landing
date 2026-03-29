'use client'
import { motion, useTransform, type MotionValue } from 'framer-motion'

interface HeroFloatingCardsProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function HeroFloatingCards({ mouseX, mouseY }: HeroFloatingCardsProps) {
  const card1X = useTransform(mouseX, [-1, 1], [-14, 14])
  const card1Y = useTransform(mouseY, [-1, 1], [-10, 10])
  const card2X = useTransform(mouseX, [-1, 1], [10, -10])
  const card2Y = useTransform(mouseY, [-1, 1], [-8, 8])
  const card3X = useTransform(mouseX, [-1, 1], [-8, 8])
  const card3Y = useTransform(mouseY, [-1, 1], [6, -6])

  return (
    <>
      {/* Card 1 — IRS Ready (top left of dashboard) */}
      <motion.div
        className="absolute -left-10 top-8 z-20 animate-float"
        style={{ x: card1X, y: card1Y }}
        initial={{ opacity: 0, x: -20, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.7, type: 'spring', stiffness: 200, damping: 18 }}
      >
        <div
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border"
          style={{
            background: 'rgba(14, 61, 44, 0.75)',
            backdropFilter: 'blur(16px)',
            borderColor: 'rgba(242, 201, 76, 0.3)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(242,201,76,0.15)',
          }}
        >
          <span className="text-xl">🏆</span>
          <div>
            <p className="text-[10px] text-white/50 font-mono uppercase tracking-widest">Status IRS</p>
            <p className="text-sm font-bold text-brand-gold leading-tight">Listo 2024</p>
          </div>
        </div>
      </motion.div>

      {/* Card 2 — Transactions (bottom right of dashboard) */}
      <motion.div
        className="absolute -right-8 bottom-14 z-20 animate-float-slow"
        style={{ x: card2X, y: card2Y }}
        initial={{ opacity: 0, x: 20, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.7, type: 'spring', stiffness: 200, damping: 18 }}
      >
        <div
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border"
          style={{
            background: 'rgba(3, 15, 8, 0.8)',
            backdropFilter: 'blur(16px)',
            borderColor: 'rgba(100, 190, 146, 0.25)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(100,190,146,0.15)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64BE92" strokeWidth="2">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] text-white/50 font-mono uppercase tracking-widest">Transacciones</p>
            <p className="text-sm font-bold text-white leading-tight">847 reconciliadas</p>
          </div>
        </div>
      </motion.div>

      {/* Card 3 — Zero penalties (top right) */}
      <motion.div
        className="absolute right-4 -top-6 z-20 animate-float-fast"
        style={{ x: card3X, y: card3Y }}
        initial={{ opacity: 0, y: -16, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.7, type: 'spring', stiffness: 200, damping: 18 }}
      >
        <div
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl border"
          style={{
            background: 'rgba(100, 190, 146, 0.12)',
            backdropFilter: 'blur(16px)',
            borderColor: 'rgba(100, 190, 146, 0.35)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64BE92" strokeWidth="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <p className="text-xs font-semibold text-brand-light">0 penalidades IRS</p>
        </div>
      </motion.div>
    </>
  )
}
