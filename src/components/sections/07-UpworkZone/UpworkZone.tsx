'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import BrandLogo from '@/components/ui/BrandLogo'
import { BRAND, UPWORK_BADGES, UPWORK_QUOTE } from '@/lib/constants'

// Upwork brand: #14A800 green, dark navy identity
const UPWORK_GREEN = '#14A800'
const UPWORK_LIGHT = '#6FDA44'
const UPWORK_NAVY = '#040D18'

const CONTRACT_METRICS = [
  { label: 'Total ganado', value: '$10K+', icon: '💰' },
  { label: 'Contratos', value: '38', icon: '📋' },
  { label: 'Horas registradas', value: '782h', icon: '⏱' },
  { label: 'Job Success', value: '100%', icon: '✓', highlight: true },
]

export default function UpworkZone() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 85% 40%, rgba(20,168,0,0.07) 0%, transparent 55%),
                     radial-gradient(ellipse at 15% 80%, rgba(20,168,0,0.04) 0%, transparent 50%),
                     ${UPWORK_NAVY}`,
      }}
    >
      {/* Subtle dot grid — corporate feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(20,168,0,0.15) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          opacity: 0.4,
        }}
      />

      {/* Upwork green glow right side */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, rgba(20,168,0,0.06) 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Upwork platform header ── */}
        <div className="flex items-center justify-between mb-14">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-px h-8"
              style={{ background: `linear-gradient(to bottom, transparent, ${UPWORK_GREEN}, transparent)` }}
            />
            <span
              className="text-[10px] font-mono uppercase tracking-widest"
              style={{ color: `${UPWORK_GREEN}90` }}
            >
              Plataforma enterprise
            </span>
            <div
              className="px-3 py-1 rounded text-xs font-bold tracking-wide"
              style={{
                background: 'rgba(20,168,0,0.1)',
                border: `1px solid rgba(20,168,0,0.3)`,
                color: UPWORK_LIGHT,
              }}
            >
              ✦ Top Rated · 100% JSS
            </div>
          </motion.div>

          {/* Upwork logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/assets/upwork/upwork-logo.png"
              alt="Upwork"
              width={100}
              height={28}
              className="h-6 w-auto object-contain opacity-40"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </motion.div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Profile + headline */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h2
                className="font-display font-bold text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
              >
                Donde los contadores corporativos{' '}
                <span style={{ color: UPWORK_LIGHT }}>confían su bookkeeping.</span>
              </h2>
              <p className="text-muted leading-relaxed">
                En Upwork trabajamos con preparadores de impuestos, CPAs y firmas contables que
                necesitan libros <strong className="text-white">impecables, estandarizados y entregados a tiempo</strong> para sus clientes.
                El 100% Job Success Score no es accidente — es sistema.
              </p>
            </div>

            {/* Contract metrics — NOT badge grid, but a statement */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(20,168,0,0.05)',
                border: `1px solid rgba(20,168,0,0.15)`,
              }}
            >
              <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: `${UPWORK_GREEN}80` }}>
                Historial verificado en Upwork
              </p>
              <div className="grid grid-cols-2 gap-4">
                {CONTRACT_METRICS.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{
                      background: m.highlight
                        ? `rgba(20,168,0,0.12)`
                        : 'rgba(255,255,255,0.03)',
                      border: m.highlight
                        ? `1px solid rgba(111,218,68,0.3)`
                        : '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <span className="text-lg">{m.icon}</span>
                    <div>
                      <p
                        className="font-display font-bold text-lg leading-none"
                        style={{ color: m.highlight ? UPWORK_LIGHT : 'white' }}
                      >
                        {m.value}
                      </p>
                      <p className="text-[10px] font-mono mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {m.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real client quote */}
            <div
              className="relative p-6 rounded-2xl"
              style={{
                background: 'rgba(4,13,24,0.8)',
                border: `1px solid rgba(20,168,0,0.15)`,
              }}
            >
              <div
                className="absolute top-4 left-5 text-4xl font-display leading-none"
                style={{ color: `${UPWORK_GREEN}30` }}
              >
                &ldquo;
              </div>
              <p className="text-sm text-muted leading-relaxed italic pt-4 pl-3">
                Johan does exceptional work! The delivery was made within the estimated timeframe,
                and the analysis of the accounts, as well as the accounting setup, was very accurate.
                I will definitely work with him again in the future! 100% Recommended service!
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: 'rgba(20,168,0,0.2)', color: UPWORK_LIGHT }}
                >
                  T
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Servicios de Bookkeeping</p>
                  <p className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Mayo 2025 · Upwork · 5.0 ★
                  </p>
                </div>
                <div className="ml-auto flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={UPWORK_LIGHT}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Upwork profile screenshots stacked */}
          <motion.div
            className="space-y-4 relative"
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main profile */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                border: `1px solid rgba(20,168,0,0.2)`,
                boxShadow: `0 0 60px rgba(20,168,0,0.08), 0 24px 60px rgba(0,0,0,0.7)`,
              }}
            >
              {/* Browser bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ background: '#0D1117' }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: `${UPWORK_GREEN}80` }} />
                </div>
                <div
                  className="flex-1 max-w-xs mx-4 px-3 py-0.5 rounded text-[10px] font-mono text-center"
                  style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)' }}
                >
                  upwork.com/freelancers/~0194280015f53bd3c2
                </div>
              </div>
              <Image
                src="/assets/upwork/screenshot-1.png"
                alt="Johan G. — Upwork Profile: 100% Job Success, Top Rated"
                width={600}
                height={360}
                className="w-full object-cover object-top"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                style={{ background: `linear-gradient(to bottom, transparent, ${UPWORK_NAVY}CC)` }}
              />
            </div>

            {/* Work history */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                border: `1px solid rgba(20,168,0,0.12)`,
                boxShadow: `0 8px 30px rgba(0,0,0,0.6)`,
              }}
            >
              <Image
                src="/assets/upwork/screenshot-2.png"
                alt="Upwork Work History"
                width={600}
                height={260}
                className="w-full object-cover object-top"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
                style={{ background: `linear-gradient(to bottom, transparent, ${UPWORK_NAVY})` }}
              />
            </div>

            {/* Floating BookkeepingAlDía + Top Rated badge */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-3 rounded-xl"
              style={{
                background: `rgba(4,13,24,0.95)`,
                border: `1px solid rgba(20,168,0,0.3)`,
                backdropFilter: 'blur(20px)',
                boxShadow: `0 0 24px rgba(20,168,0,0.15)`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <BrandLogo size="sm" />
              <p className="text-[10px] font-mono mt-1.5" style={{ color: UPWORK_LIGHT }}>
                Top Rated · 100% JSS
              </p>
            </motion.div>

            {/* CTA */}
            <motion.a
              href={BRAND.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono mt-2 transition-colors duration-200"
              style={{ color: `${UPWORK_LIGHT}80` }}
              whileHover={{ color: UPWORK_LIGHT }}
            >
              Ver perfil completo en Upwork
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
