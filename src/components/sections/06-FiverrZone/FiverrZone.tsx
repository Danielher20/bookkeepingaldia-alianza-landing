'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import StarRating from '@/components/ui/StarRating'
import BrandLogo from '@/components/ui/BrandLogo'
import { FIVERR_REVIEWS, BRAND } from '@/lib/constants'

// Fiverr brand: #1DBF73 mint green
const FIVERR_GREEN = '#1DBF73'
const FIVERR_DARK = '#222325'

const FiverrIcon = () => (
  <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
    <text x="0" y="20" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="900" fontSize="22" fill="white">fiverr</text>
    <circle cx="74" cy="6" r="4" fill={FIVERR_GREEN} />
  </svg>
)

const doubled = [
  ...Array.from({ length: 8 }, (_, i) => i),
  ...Array.from({ length: 8 }, (_, i) => i),
]

export default function FiverrZone() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 20% 60%, rgba(29,191,115,0.09) 0%, transparent 55%),
                     radial-gradient(ellipse at 80% 20%, rgba(29,191,115,0.05) 0%, transparent 50%),
                     #030F08`,
      }}
    >
      {/* Fiverr-tinted grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(29,191,115,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(29,191,115,0.03) 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
        }}
      />

      {/* Fiverr green ambient glow */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, rgba(29,191,115,0.08) 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Fiverr Platform Header ── */}
        <div className="flex items-center gap-3 mb-16">
          <div
            className="w-px h-8"
            style={{ background: `linear-gradient(to bottom, transparent, ${FIVERR_GREEN}, transparent)` }}
          />
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span
              className="text-[10px] font-mono uppercase tracking-widest"
              style={{ color: 'rgba(29,191,115,0.6)' }}
            >
              Plataforma verificada
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{
                background: 'rgba(29,191,115,0.12)',
                border: `1px solid rgba(29,191,115,0.3)`,
                color: FIVERR_GREEN,
              }}
            >
              fiverr.
            </span>
          </motion.div>
        </div>

        {/* ── Main layout: left stat + right browser mockup ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">

          {/* Left: Big stat + description */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Giant 5.0 */}
            <div>
              <div className="flex items-end gap-4 mb-2">
                <span
                  className="font-display font-black leading-none"
                  style={{ fontSize: 'clamp(80px, 12vw, 128px)', color: FIVERR_GREEN }}
                >
                  5.0
                </span>
                <div className="pb-3">
                  <div className="flex gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={FIVERR_GREEN}>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-mono" style={{ color: `${FIVERR_GREEN}99` }}>
                    Calificación perfecta
                  </p>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                66 reseñas verificadas · Level 2 Seller · 100% entregas a tiempo
              </p>
            </div>

            {/* Divider */}
            <div
              className="h-px w-full"
              style={{ background: `linear-gradient(to right, rgba(29,191,115,0.3), transparent)` }}
            />

            {/* Value prop for tax preparers */}
            <div className="space-y-4">
              <h2
                className="font-display font-bold leading-tight text-white"
                style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
              >
                Más de 66 propietarios de LLC{' '}
                <span style={{ color: FIVERR_GREEN }}>lo confirman.</span>
              </h2>
              <p className="text-muted leading-relaxed">
                Cada reseña es una LLC organizada, con libros reconciliados y reportes
                P&L + Balance Sheet entregados a tiempo — <strong className="text-white">exactamente lo que necesitas
                tú como preparador para declarar sin errores.</strong>
              </p>
            </div>

            {/* Metrics row */}
            <div className="flex gap-6">
              {[
                { v: '66', l: 'Reseñas' },
                { v: '100%', l: 'A tiempo' },
                { v: 'Lv. 2', l: 'Seller Badge' },
              ].map((s, i) => (
                <div key={i} className={i > 0 ? 'border-l pl-6' : ''} style={{ borderColor: 'rgba(29,191,115,0.2)' }}>
                  <p className="font-display font-bold text-2xl text-white">{s.v}</p>
                  <p className="text-xs font-mono uppercase tracking-wider mt-0.5" style={{ color: `${FIVERR_GREEN}80` }}>{s.l}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href={BRAND.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: `rgba(29,191,115,0.12)`,
                border: `1px solid rgba(29,191,115,0.35)`,
                color: FIVERR_GREEN,
              }}
              whileHover={{ background: `rgba(29,191,115,0.2)`, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver perfil completo
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right: Real browser-window profile mockup */}
          <motion.div
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Browser chrome */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: `1px solid rgba(29,191,115,0.25)`,
                boxShadow: `0 0 80px rgba(29,191,115,0.08), 0 32px 64px rgba(0,0,0,0.6)`,
              }}
            >
              {/* Browser top bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: FIVERR_DARK }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full" style={{ background: `${FIVERR_GREEN}99` }} />
                </div>
                <div
                  className="flex-1 mx-4 px-3 py-1 rounded text-xs font-mono text-center"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.4)',
                    maxWidth: 300,
                  }}
                >
                  fiverr.com/johangarcia124
                </div>
              </div>

              {/* Screenshot */}
              <Image
                src="/assets/fiverr/screenshot-1.png"
                alt="Johan Garcia — Fiverr Profile"
                width={720}
                height={420}
                className="w-full object-cover object-top"
              />
            </div>

            {/* Floating reviews overlay — bottom left */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-64 rounded-xl overflow-hidden"
              style={{
                background: 'rgba(3,15,8,0.95)',
                border: `1px solid rgba(29,191,115,0.25)`,
                backdropFilter: 'blur(20px)',
                boxShadow: `0 0 30px rgba(29,191,115,0.1), 0 16px 40px rgba(0,0,0,0.7)`,
              }}
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Image
                src="/assets/fiverr/screenshot-2.png"
                alt="Fiverr Reviews — 66 reviews 5.0★"
                width={280}
                height={200}
                className="w-full object-cover object-top"
              />
              <div className="px-3 py-2 flex items-center gap-2">
                <span className="text-xs font-bold" style={{ color: FIVERR_GREEN }}>66 reviews</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={FIVERR_GREEN}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating BookkeepingAlDía badge — top right */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2.5 rounded-xl flex items-center gap-3"
              style={{
                background: 'rgba(3,15,8,0.95)',
                border: `1px solid rgba(29,191,115,0.3)`,
                backdropFilter: 'blur(20px)',
                boxShadow: `0 0 20px rgba(29,191,115,0.15)`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <BrandLogo size="sm" />
              <div
                className="w-px h-5"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              />
              <span className="text-xs font-mono" style={{ color: FIVERR_GREEN }}>
                5.0 ★ Fiverr
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Review Ticker ── */}
        <div className="relative overflow-hidden pb-2">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #030F08, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #030F08, transparent)' }}
          />

          <div
            className="flex gap-4 w-max"
            style={{ animation: 'scrollX 40s linear infinite' }}
          >
            {[...FIVERR_REVIEWS, ...FIVERR_REVIEWS].map((review, i) => (
              <div
                key={`${review.id}-${i}`}
                className="flex-shrink-0 w-80 p-5 rounded-2xl"
                style={{
                  background: 'rgba(29,191,115,0.04)',
                  border: `1px solid rgba(29,191,115,0.12)`,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: review.color }}
                  >
                    {review.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white truncate">{review.author}</p>
                    <p className="text-[10px] font-mono" style={{ color: `${FIVERR_GREEN}80` }}>{review.location}</p>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="10" height="10" viewBox="0 0 24 24" fill={FIVERR_GREEN}>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed line-clamp-2">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-[10px] font-mono mt-2" style={{ color: `${FIVERR_GREEN}60` }}>
                  {review.service}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
