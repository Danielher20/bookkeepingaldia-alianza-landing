'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const PAIN_POINTS = [
  {
    number: '01',
    title: 'Meses sin tocar los libros',
    desc: 'Transacciones mezcladas, sin categorías. Imposible saber si el negocio está ganando o perdiendo.',
    tag: 'Sin clasificar',
  },
  {
    number: '02',
    title: 'Cuentas bancarias sin reconciliar',
    desc: 'El saldo en QuickBooks no coincide con el banco. Nadie sabe cuál de los dos tiene razón.',
    tag: 'Diferencia: $3,847',
  },
  {
    number: '03',
    title: 'Gastos personales mezclados con el negocio',
    desc: 'Compras en Amazon, gasolina, cenas — todo revuelto con las transacciones de la LLC.',
    tag: 'Red flag IRS',
  },
  {
    number: '04',
    title: 'Carta del IRS sin responder',
    desc: 'Ya llegó una notificación. El preparador pide los libros y no hay nada listo.',
    tag: 'Urgente',
  },
  {
    number: '05',
    title: 'No saben cuánto están ganando',
    desc: 'No existe un P&L real. Las decisiones de negocio se toman a ojo, sin reportes.',
    tag: 'Sin reportes',
  },
  {
    number: '06',
    title: '2+ años de backlog acumulado',
    desc: 'Intentaron organizarlo solos. No pudieron. Ahora hay años de caos que alguien tiene que limpiar.',
    tag: '24+ meses',
  },
]

const CYCLE_MS = 4000

// ─── Illustration ────────────────────────────────────────────────────────────
function StressedAccountant({ active }: { active: number }) {
  return (
    <div className="relative w-full h-full flex items-end justify-center pb-0 select-none">
      {/* Red ambient glow behind scene */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 70%, rgba(180,0,0,0.18) 0%, rgba(100,0,0,0.06) 45%, transparent 70%)',
        }}
      />

      <svg
        viewBox="0 0 480 420"
        className="w-full max-w-[480px] relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="deskGlow" cx="50%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
          </radialGradient>
          <filter id="soft-blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <filter id="glow-red">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Room background glow */}
        <ellipse cx="240" cy="340" rx="220" ry="100" fill="url(#deskGlow)" />

        {/* ── DESK SURFACE (perspective trapezoid) ── */}
        <path
          d="M 30 290 L 450 290 L 480 390 L 0 390 Z"
          fill="#0c1a10"
          stroke="#1a3020"
          strokeWidth="1"
        />
        {/* Desk edge highlight */}
        <line x1="30" y1="290" x2="450" y2="290" stroke="#1e3a24" strokeWidth="1.5" />

        {/* ── BOOKS — stacked left, chaotic ── */}
        {/* Book base (thick ledger, dark green) */}
        <rect x="55" y="232" width="78" height="58" rx="2" fill="#0e2818" />
        <rect x="55" y="232" width="7" height="58" fill="#1a4a2a" />
        <rect x="55" y="250" width="78" height="1.5" fill="#1a3820" opacity="0.6" />
        <rect x="55" y="262" width="78" height="1.5" fill="#1a3820" opacity="0.6" />
        <rect x="55" y="274" width="78" height="1.5" fill="#1a3820" opacity="0.6" />

        {/* Book 2 (tilted, leaning) */}
        <g transform="rotate(-6, 110, 230)">
          <rect x="75" y="215" width="68" height="52" rx="2" fill="#112010" />
          <rect x="75" y="215" width="6" height="52" fill="#2a5a3a" />
        </g>

        {/* Book 3 (on top, about to fall) */}
        <g transform="rotate(10, 90, 215)">
          <rect x="60" y="200" width="76" height="38" rx="2" fill="#0a1a0e" />
          <rect x="60" y="200" width="5" height="38" fill="#3d6a48" opacity="0.8" />
        </g>

        {/* Book 4 — fallen on its side */}
        <g transform="rotate(-2, 160, 285)">
          <rect x="140" y="275" width="55" height="18" rx="2" fill="#0e2010" />
          <rect x="140" y="275" width="55" height="4" fill="#2a5a3a" opacity="0.6" />
        </g>

        {/* ── PAPERS scattered ── */}
        {/* Paper 1 — main sheet, messy lines */}
        <g transform="rotate(-4, 230, 265)">
          <rect x="185" y="250" width="120" height="80" rx="1" fill="#f5f0e8" opacity="0.88" />
          {/* Text lines on paper */}
          <line x1="198" y1="268" x2="286" y2="268" stroke="#ccc" strokeWidth="0.8" />
          <line x1="198" y1="278" x2="275" y2="278" stroke="#ccc" strokeWidth="0.8" />
          <line x1="198" y1="288" x2="290" y2="288" stroke="#ccc" strokeWidth="0.8" />
          <line x1="198" y1="298" x2="260" y2="298" stroke="#ccc" strokeWidth="0.8" />
          {/* Red X mark */}
          <line x1="268" y1="262" x2="283" y2="277" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="283" y1="262" x2="268" y2="277" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
          {/* "???" scrawl */}
          <text x="198" y="320" fill="#dc2626" fontSize="9" fontFamily="monospace" opacity="0.7">??? sin categoría</text>
        </g>

        {/* Paper 2 — partially under books */}
        <g transform="rotate(8, 160, 278)">
          <rect x="120" y="265" width="90" height="55" rx="1" fill="#ede8dc" opacity="0.65" />
          <line x1="132" y1="280" x2="195" y2="280" stroke="#bbb" strokeWidth="0.7" />
          <line x1="132" y1="292" x2="188" y2="292" stroke="#bbb" strokeWidth="0.7" />
        </g>

        {/* Paper 3 — edge of desk, tilted dangerously */}
        <g transform="rotate(18, 390, 270)">
          <rect x="360" y="252" width="75" height="55" rx="1" fill="#f5f0e8" opacity="0.7" />
          <text x="368" y="278" fill="#dc2626" fontSize="8" fontFamily="monospace">ERROR</text>
          <line x1="368" y1="285" x2="420" y2="285" stroke="#ccc" strokeWidth="0.7" />
        </g>

        {/* Flying papers (above desk level) */}
        <g transform="rotate(22, 340, 160)">
          <rect x="318" y="140" width="65" height="48" rx="1" fill="#f5f0e8" opacity="0.5" />
          <line x1="326" y1="158" x2="372" y2="158" stroke="#ddd" strokeWidth="0.6" />
          <line x1="326" y1="167" x2="365" y2="167" stroke="#ddd" strokeWidth="0.6" />
        </g>
        <g transform="rotate(-18, 110, 145)">
          <rect x="85" y="128" width="58" height="42" rx="1" fill="#f5f0e8" opacity="0.4" />
          <text x="92" y="152" fill="#dc2626" fontSize="8" fontFamily="monospace" opacity="0.8">$3,847?</text>
        </g>
        <g transform="rotate(8, 220, 120)">
          <rect x="195" y="108" width="52" height="38" rx="1" fill="#f0ebe0" opacity="0.3" />
        </g>

        {/* ── LAPTOP / SCREEN ── */}
        {/* Screen body */}
        <rect x="220" y="168" width="148" height="96" rx="4" fill="#0d1f13" stroke="#1e3a22" strokeWidth="1.5" />
        {/* Screen face */}
        <rect x="226" y="174" width="136" height="84" rx="2" fill="#080e09" />
        {/* Screen red glow */}
        <ellipse cx="294" cy="216" rx="50" ry="30" fill="url(#screenGlow)" opacity="0.3" />
        {/* Error content on screen */}
        <rect x="234" y="182" width="48" height="7" rx="1" fill="#dc2626" opacity="0.85" />
        <rect x="234" y="195" width="80" height="4" rx="1" fill="#2a3a2a" opacity="0.9" />
        <rect x="234" y="203" width="55" height="4" rx="1" fill="#dc2626" opacity="0.45" />
        <rect x="234" y="211" width="92" height="4" rx="1" fill="#2a3a2a" opacity="0.9" />
        <rect x="234" y="219" width="38" height="4" rx="1" fill="#dc2626" opacity="0.3" />
        <rect x="234" y="230" width="70" height="4" rx="1" fill="#2a3a2a" opacity="0.6" />
        <rect x="234" y="242" width="45" height="4" rx="1" fill="#dc2626" opacity="0.2" />
        {/* Big error icon on screen */}
        <circle cx="320" cy="210" r="18" fill="#7c1515" opacity="0.6" />
        <text x="320" y="216" fill="#ff4444" fontSize="18" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">!</text>
        {/* Laptop base/hinge */}
        <path d="M 218 264 L 370 264 L 388 282 L 200 282 Z" fill="#0c1a10" stroke="#1e3a22" strokeWidth="1" />

        {/* ── COFFEE MUG ── */}
        <rect x="400" y="255" width="28" height="34" rx="3" fill="#1a0e08" />
        <rect x="400" y="255" width="28" height="6" rx="2" fill="#251408" />
        <path d="M 428 265 Q 442 268 428 278" stroke="#251408" strokeWidth="5" strokeLinecap="round" fill="none" />
        {/* Steam */}
        <path d="M 409 253 Q 412 244 409 235" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 418 251 Q 421 241 418 232" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── PERSON — seated, stressed ── */}
        {/* Chair back */}
        <rect x="205" y="308" width="108" height="10" rx="3" fill="#0c1508" />
        <rect x="218" y="318" width="12" height="55" rx="2" fill="#0c1508" />
        <rect x="288" y="318" width="12" height="55" rx="2" fill="#0c1508" />

        {/* Torso / body */}
        <path
          d="M 218 310 Q 240 300 260 300 Q 280 300 300 310 L 302 345 Q 260 355 216 345 Z"
          fill="#1e2a20"
        />
        {/* Shirt collar hint */}
        <path d="M 248 300 L 255 312 L 262 300" stroke="#2a3a2c" strokeWidth="1.5" fill="none" />

        {/* Left arm on desk */}
        <path
          d="M 220 320 Q 200 330 178 290"
          stroke="#1e2a20"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right arm on desk */}
        <path
          d="M 298 320 Q 318 330 340 290"
          stroke="#1e2a20"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />

        {/* Head */}
        <circle cx="260" cy="272" r="34" fill="#c8956a" />
        {/* Hair */}
        <path
          d="M 226 262 Q 228 238 260 234 Q 292 238 294 262 Q 280 248 260 248 Q 240 248 226 262 Z"
          fill="#3a2010"
        />
        {/* Forehead shadow (stress) */}
        <path d="M 236 260 Q 260 255 284 260" stroke="#b07850" strokeWidth="1" fill="none" opacity="0.4" />

        {/* Hands covering / near face — stressed pose */}
        {/* Left hand near left temple */}
        <ellipse cx="232" cy="268" rx="16" ry="10" fill="#c8956a" transform="rotate(-20, 232, 268)" />
        <ellipse cx="222" cy="272" rx="10" ry="7" fill="#c8956a" transform="rotate(-30, 222, 272)" />
        {/* Right hand near right temple */}
        <ellipse cx="288" cy="268" rx="16" ry="10" fill="#c8956a" transform="rotate(20, 288, 268)" />
        <ellipse cx="298" cy="272" rx="10" ry="7" fill="#c8956a" transform="rotate(30, 298, 272)" />

        {/* Face — stressed expression */}
        {/* Eyes closed tight */}
        <path d="M 244 269 Q 249 265 254 269" stroke="#6a3820" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 266 269 Q 271 265 276 269" stroke="#6a3820" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Frown */}
        <path d="M 247 284 Q 260 279 273 284" stroke="#6a3820" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* Stress lines on forehead */}
        <line x1="248" y1="258" x2="250" y2="253" stroke="#b07050" strokeWidth="1.2" opacity="0.5" />
        <line x1="260" y1="256" x2="260" y2="251" stroke="#b07050" strokeWidth="1.2" opacity="0.5" />
        <line x1="272" y1="258" x2="270" y2="253" stroke="#b07050" strokeWidth="1.2" opacity="0.5" />

        {/* ── FLOATING WARNING SIGNS ── */}
        {/* Warning 1 — top left */}
        <g filter="url(#glow-red)">
          <polygon points="58,92 78,128 38,128" fill="#5a0a0a" opacity="0.9" />
          <text x="58" y="120" fill="#ff4444" fontSize="18" textAnchor="middle" fontWeight="bold">!</text>
        </g>
        {/* Warning 2 — top right */}
        <g filter="url(#glow-red)">
          <polygon points="420,80 438,112 402,112" fill="#5a0a0a" opacity="0.75" />
          <text x="420" y="104" fill="#ff6666" fontSize="15" textAnchor="middle" fontWeight="bold">!</text>
        </g>
        {/* Warning 3 — small, middle */}
        <polygon points="158,72 172,96 144,96" fill="#5a0a0a" opacity="0.55" />
        <text x="158" y="90" fill="#ff6666" fontSize="12" textAnchor="middle" fontWeight="bold">!</text>

        {/* ── FLOATING ERROR TEXT ── */}
        <text x="330" y="148" fill="#dc2626" fontSize="10" fontFamily="monospace" opacity="0.55" transform="rotate(6, 330, 148)">$3,847??</text>
        <text x="100" y="190" fill="#dc2626" fontSize="9" fontFamily="monospace" opacity="0.45" transform="rotate(-4, 100, 190)">SIN CATEGORÍA</text>
        <text x="385" y="175" fill="#ff6666" fontSize="8" fontFamily="monospace" opacity="0.4">ERROR</text>
        <text x="195" y="105" fill="#dc2626" fontSize="8" fontFamily="monospace" opacity="0.3" transform="rotate(10, 195, 105)">sin reconciliar</text>

        {/* Active pain-point highlight pulse on books or papers */}
        {(active === 0 || active === 5) && (
          <rect
            x="52" y="196" width="108" height="96"
            rx="4"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1.5"
            opacity="0.35"
            strokeDasharray="4 4"
          />
        )}
        {(active === 1) && (
          <rect
            x="222" y="170" width="150" height="114"
            rx="4"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1.5"
            opacity="0.35"
            strokeDasharray="4 4"
          />
        )}
        {(active === 2 || active === 3) && (
          <rect
            x="183" y="248" width="124" height="84"
            rx="4"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1.5"
            opacity="0.35"
            strokeDasharray="4 4"
          />
        )}
      </svg>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function TransitionChaos() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: false, margin: '-15%' })

  // Auto-cycle pain points
  useEffect(() => {
    if (!inView) return
    setProgress(0)
    const start = Date.now()
    const tick = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min((elapsed / CYCLE_MS) * 100, 100)
      setProgress(pct)
      if (elapsed >= CYCLE_MS) {
        setActive(p => (p + 1) % PAIN_POINTS.length)
        setProgress(0)
      }
    }, 30)
    return () => clearInterval(tick)
  }, [inView, active])

  const current = PAIN_POINTS[active]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 60%, rgba(100,0,0,0.1) 0%, transparent 55%), #09100b',
        minHeight: '100vh',
      }}
    >
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, #030F08, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-0 min-h-screen flex flex-col justify-center">

        {/* Label */}
        <div className="mb-8 lg:mb-0 lg:absolute lg:top-20 lg:left-10">
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium"
            style={{
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.25)',
              color: '#f87171',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
            La realidad de tus clientes
          </motion.span>
        </div>

        {/* Main grid — illustration + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Illustration ── */}
          <motion.div
            className="relative"
            style={{ minHeight: 380 }}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <StressedAccountant active={active} />
          </motion.div>

          {/* ── RIGHT: Cycling text ── */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {/* Headline */}
            <h2
              className="font-display font-bold text-white leading-tight mb-8"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Cuando un cliente llega a ti,{' '}
              <br />
              <span style={{ color: '#f87171' }}>sus libros se ven así:</span>
            </h2>

            {/* Cycling pain point */}
            <div
              className="relative"
              style={{
                minHeight: 200,
                borderLeft: '2px solid rgba(239,68,68,0.2)',
                paddingLeft: 28,
              }}
            >
              {/* Progress line on the left border */}
              <motion.div
                className="absolute left-[-2px] top-0 w-[2px]"
                style={{
                  height: `${progress}%`,
                  background: 'linear-gradient(to bottom, #dc2626, #f87171)',
                  boxShadow: '0 0 8px rgba(220,38,38,0.6)',
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Number */}
                  <span
                    className="font-mono font-bold mb-3 block"
                    style={{ fontSize: 72, lineHeight: 1, color: 'rgba(220,38,38,0.15)' }}
                  >
                    {current.number}
                  </span>

                  {/* Tag */}
                  <span
                    className="inline-block text-[10px] font-mono px-2.5 py-1 rounded-full mb-4"
                    style={{
                      background: 'rgba(239,68,68,0.12)',
                      border: '1px solid rgba(239,68,68,0.3)',
                      color: '#f87171',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {current.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-display font-semibold text-white leading-snug mb-4"
                    style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
                  >
                    {current.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16 }}
                  >
                    {current.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot navigation */}
            <div className="flex items-center gap-3 mt-8">
              {PAIN_POINTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setProgress(0) }}
                  className="transition-all duration-300"
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === active ? '#dc2626' : 'rgba(255,255,255,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  aria-label={`Pain point ${i + 1}`}
                />
              ))}
              <span className="text-xs font-mono ml-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {active + 1} / {PAIN_POINTS.length}
              </span>
            </div>

            {/* Subtle note */}
            <p
              className="mt-6 text-sm"
              style={{ color: 'rgba(255,255,255,0.38)' }}
            >
              Esto no es una rareza — es la situación de la mayoría de LLCs que llegan a ti sin preparación.
              <span style={{ color: 'rgba(100,190,146,0.7)' }}>
                {' '}Nosotros lo resolvemos.
              </span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Transition arrow at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>
          Nosotros llevamos a tus clientes de aquí →
        </p>
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(239,68,68,0.4), rgba(100,190,146,0.6))' }}
        />
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #030F08)' }}
      />
    </section>
  )
}
