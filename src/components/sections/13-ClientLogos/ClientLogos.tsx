'use client'
import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { CLIENT_LOGOS } from '@/lib/constants'
import type { ClientLogo } from '@/types'

// ─── Card dimensions ─────────────────────────────────────────────────────────
const CARD_W = 200
const CARD_H = 116
const LOGO_AREA_H = 70   // fixed height for ALL logos — ensures uniform visual weight

// ─── Modal ───────────────────────────────────────────────────────────────────
function ClientModal({ client, onClose }: { client: ClientLogo; onClose: () => void }) {
  const m = client.modal!
  const isDark = client.surface === 'dark'

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }} />

        {/* Panel */}
        <motion.div
          className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden"
          style={{
            background: '#0a1a0f',
            border: '1px solid rgba(100,190,146,0.2)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
          }}
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
        >
          {/* Logo banner */}
          <div
            className="flex items-center justify-center py-10 px-8"
            style={{
              background: isDark
                ? 'linear-gradient(135deg, #0d2018 0%, #162e22 100%)'
                : 'linear-gradient(135deg, #f8faf9 0%, #e8f2ec 100%)',
              borderBottom: '1px solid rgba(100,190,146,0.12)',
              minHeight: 140,
            }}
          >
            <Image
              src={client.src}
              alt={client.name}
              width={220}
              height={100}
              style={{
                maxWidth: 220,
                maxHeight: 100,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-5">
            {/* Name + industry */}
            <div>
              <h3 className="font-display font-bold text-white text-xl">{client.name}</h3>
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(100,190,146,0.1)', border: '1px solid rgba(100,190,146,0.2)', color: '#64BE92' }}>
                  {m.industry}
                </span>
                <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  📍 {m.location}
                </span>
              </div>
            </div>

            {/* How they found us */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{ background: 'rgba(100,190,146,0.06)', border: '1px solid rgba(100,190,146,0.14)' }}
            >
              <span className="text-xl">{m.channelIcon}</span>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Cómo llegaron
                </p>
                <p className="text-sm font-semibold text-white mt-0.5">{m.channel}</p>
              </div>
            </div>

            {/* Story */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Su historia
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                {m.story}
              </p>
            </div>

            {/* Services */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider mb-2.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Servicios activos
              </p>
              <div className="flex flex-wrap gap-2">
                {m.services.map((svc, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.65)' }}>
                    ✓ {svc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function ClientLogos() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [active, setActive] = useState<ClientLogo | null>(null)

  // Triple for seamless infinite loop
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20"
      style={{ background: '#030F08' }}
    >
      {/* Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(100,190,146,0.15), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(100,190,146,0.15), transparent)' }} />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 mb-10 text-center">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <SectionLabel color="muted">Clientes Reales</SectionLabel>
        </motion.div>
        <motion.p className="mt-3 text-base text-muted"
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
          Empresas que ya confían en BookkeepingAlDía para mantener sus libros impecables
        </motion.p>
        <motion.p className="mt-1.5 text-xs font-mono" style={{ color: 'rgba(255,255,255,0.28)' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
          Haz clic en cualquier logo para ver su historia
        </motion.p>
      </div>

      {/* ── Carousel ── */}
      <div className="relative overflow-hidden">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #030F08, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #030F08, transparent)' }} />

        {/* Track */}
        <div
          className="flex items-center gap-5 py-4"
          style={{
            animation: 'scrollLogos 40s linear infinite',
            width: 'max-content',
            willChange: 'transform',
          }}
        >
          {items.map((client, i) => {
            const isDark = client.surface === 'dark'
            return (
              <button
                key={`${client.name}-${i}`}
                onClick={() => client.modal && setActive(client)}
                title={client.modal ? `Ver historia de ${client.name}` : client.name}
                className="flex-shrink-0 flex flex-col items-center justify-between rounded-2xl group transition-transform duration-200 hover:-translate-y-1"
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  padding: '14px 16px 10px',
                  cursor: client.modal ? 'pointer' : 'default',
                  // White or dark background depending on logo needs
                  background: isDark
                    ? 'linear-gradient(145deg, #0d2018 0%, #162e22 100%)'
                    : '#ffffff',
                  // 3D shadow — layered for depth
                  boxShadow: isDark
                    ? '0 2px 0 rgba(255,255,255,0.04), 0 6px 20px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)'
                    : '0 2px 0 rgba(255,255,255,0.9), 0 6px 20px rgba(0,0,0,0.22), 0 2px 4px rgba(0,0,0,0.12)',
                  border: isDark
                    ? '1px solid rgba(100,190,146,0.18)'
                    : '1px solid rgba(0,0,0,0.06)',
                  // Lift on hover
                  WebkitTransition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                {/* Logo area — fixed height so every logo gets the same visual footprint */}
                <div
                  style={{
                    width: '100%',
                    height: LOGO_AREA_H,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={CARD_W - 32}
                    height={LOGO_AREA_H}
                    style={{
                      maxWidth: CARD_W - 32,
                      maxHeight: LOGO_AREA_H,
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                    }}
                  />
                </div>

                {/* Name + click hint */}
                <div className="flex items-center justify-between w-full mt-1.5">
                  <p style={{
                    fontSize: 9,
                    fontFamily: 'monospace',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isDark ? 'rgba(188,233,206,0.7)' : 'rgba(10,37,25,0.45)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '80%',
                  }}>
                    {client.name}
                  </p>
                  {client.modal && (
                    <span style={{
                      fontSize: 8,
                      fontFamily: 'monospace',
                      color: isDark ? 'rgba(100,190,146,0.5)' : 'rgba(10,100,50,0.35)',
                      opacity: 0,
                      transition: 'opacity 0.2s',
                    }}
                      className="group-hover:opacity-100"
                    >
                      ver →
                    </span>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 mt-12">
        <motion.div className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }}>
          {[
            { label: 'Clientes activos',           value: '200+' },
            { label: 'Países representados',        value: '8+'   },
            { label: 'Transacciones reconciliadas', value: '50K+' },
            { label: 'Años de retención promedio',  value: '2.3'  },
          ].map((stat, i) => (
            <div key={i} className="px-6 text-center">
              <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs font-mono uppercase tracking-wider text-faint">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {active && <ClientModal client={active} onClose={() => setActive(null)} />}

      <style>{`
        @keyframes scrollLogos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-${CARD_W + 20}px * ${CLIENT_LOGOS.length})); }
        }
      `}</style>
    </section>
  )
}
