'use client'
import { useRef, useCallback } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import HeroDashboardUI from './HeroDashboardUI'
import HeroFloatingCards from './HeroFloatingCards'
import HeroParticles from './HeroParticles'
import CTAButton from '@/components/ui/CTAButton'
import GoldBadge from '@/components/ui/GoldBadge'
import { staggerContainer, heroEntry, dashboardEntry, wordReveal } from '@/lib/animation-variants'
import { BRAND, HERO_STATS } from '@/lib/constants'

const HEADLINE = 'Llevamos los libros de tus clientes del caos total a la claridad financiera'
const HEADLINE_WORDS = HEADLINE.split(' ')

const CalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const WAIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.138.563 4.144 1.543 5.878L.057 23.428a.75.75 0 00.916.916l5.55-1.486A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.496-5.241-1.363l-.375-.215-3.887 1.041 1.041-3.797-.229-.388A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const dashboardX = useTransform(mouseX, [-1, 1], [-6, 6])
  const dashboardY = useTransform(mouseY, [-1, 1], [-4, 4])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2))
      mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2))
    },
    [mouseX, mouseY]
  )

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'radial-gradient(ellipse at 75% 45%, rgba(41, 122, 87, 0.14) 0%, transparent 55%), #030F08',
      }}
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(41, 122, 87, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(14, 61, 44, 0.2) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <HeroParticles />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-8">

            {/* Eyebrow badge */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <GoldBadge>
                Para Preparadores de Impuestos · Contadores · Referidores
              </GoldBadge>
            </motion.div>

            {/* Headline word-by-word */}
            <motion.h1
              className="font-display font-bold text-display-lg text-white leading-[1.05]"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordReveal}
                  className="inline-block mr-[0.28em]"
                  style={{
                    color: word === 'caos' || word === 'total'
                      ? '#EF4444'
                      : word === 'claridad' || word === 'financiera'
                      ? '#64BE92'
                      : undefined,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Partner-focused subtext */}
            <motion.p
              className="text-base text-muted leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <span className="text-white font-medium">Tú declaras. Nosotros mantenemos los libros.</span>{' '}
              Nos especializamos en bookkeeping para LLCs — organizamos cada transacción,
              conciliamos cuentas y entregamos P&L + Balance Sheet{' '}
              <span className="text-brand-light font-medium">listos para que declares sin sorpresas.</span>
            </motion.p>

            {/* Partner value prop pills */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
            >
              {['200+ LLCs organizadas', 'Fiverr 5.0★ · 66 reviews', 'Upwork 100% JSS', '3 QB Certifications'].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium"
                  style={{
                    background: 'rgba(100,190,146,0.1)',
                    border: '1px solid rgba(100,190,146,0.25)',
                    color: '#64BE92',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-light inline-block" />
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex items-center gap-6 pt-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
            >
              {HERO_STATS.map((stat, i) => (
                <div key={i} className={i > 0 ? 'border-l border-white/8 pl-6 text-center' : 'text-center'}>
                  <p className="font-display font-bold text-2xl text-white">{stat.value}</p>
                  <p className="text-[11px] text-faint font-mono uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <CTAButton
                href={BRAND.calendarUrl}
                target="_blank"
                variant="primary"
                size="lg"
                icon={<CalIcon />}
              >
                Agendar reunión de socio
              </CTAButton>
              <CTAButton
                href={BRAND.whatsappUrl}
                target="_blank"
                variant="ghost"
                size="lg"
                icon={<WAIcon />}
              >
                Hablar por WhatsApp
              </CTAButton>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN — Dashboard ── */}
          <motion.div
            className="relative"
            variants={dashboardEntry}
            initial="hidden"
            animate="visible"
            style={{ x: dashboardX, y: dashboardY }}
          >
            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(100,190,146,0.15) 0%, transparent 70%)',
                filter: 'blur(24px)',
                transform: 'scale(1.18)',
              }}
            />

            {/* Floating cards layer */}
            <div className="relative">
              <HeroFloatingCards mouseX={mouseX} mouseY={mouseY} />
              <HeroDashboardUI />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #030F08)' }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-[10px] font-mono text-white/25 uppercase tracking-widest">descubre</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-brand-light/40 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
