'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { BRAND } from '@/lib/constants'
import BrandLogo from '@/components/ui/BrandLogo'

export default function SalesNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        'fixed top-2 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-6xl',
        'px-5 py-3 rounded-2xl transition-all duration-500',
        scrolled
          ? 'backdrop-blur-xl border border-white/10 shadow-glass'
          : 'backdrop-blur-none border border-transparent'
      )}
      style={scrolled ? { background: 'rgba(3, 15, 8, 0.85)' } : {}}
    >
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center">
          <BrandLogo size="sm" />
        </a>

        <div className="flex items-center gap-3">
          <span className="hidden md:block text-xs text-muted font-mono">
            QuickBooks ProAdvisor Platinum
          </span>
          <motion.a
            href={BRAND.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="shimmer-btn inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-bg-void"
            style={{ background: 'linear-gradient(135deg, #F2C94C 0%, #C9A52E 100%)' }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Agendar diagnóstico
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}
