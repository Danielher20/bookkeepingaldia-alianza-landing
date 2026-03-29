'use client'
import { motion } from 'framer-motion'
import { UPWORK_QUOTE } from '@/lib/constants'

// ─── The 4 deliverable documents ────────────────────────────────────────────
const DELIVERABLES = [
  {
    id: 'pl',
    name: 'Profit & Loss (P&L)',
    subtitle: 'Ingresos · Gastos · Utilidad neta',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64BE92" strokeWidth="2">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    preview: (
      <div className="flex items-end gap-1 h-8">
        {[40, 55, 50, 70, 80, 100].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{ height: `${h}%`, background: i === 5 ? '#64BE92' : 'rgba(100,190,146,0.25)' }}
          />
        ))}
      </div>
    ),
    accent: '#64BE92',
    tag: 'Mensual',
  },
  {
    id: 'bs',
    name: 'Balance Sheet',
    subtitle: 'Activos · Pasivos · Capital',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    preview: (
      <div className="space-y-1">
        {[['Activos', '100%'], ['Pasivos', '42%'], ['Capital', '58%']].map(([k, v]) => (
          <div key={k} className="flex items-center gap-2">
            <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full bg-green-400/40" style={{ width: v }} />
            </div>
            <span className="text-[8px] font-mono text-white/30 w-6 text-right">{v}</span>
          </div>
        ))}
      </div>
    ),
    accent: '#4ade80',
    tag: 'Mensual',
  },
  {
    id: 'rec',
    name: 'Reconciliación Bancaria',
    subtitle: 'QuickBooks vs. banco · 0 diferencias',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2">
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.56.93 6.16 2.44" />
      </svg>
    ),
    preview: (
      <div className="space-y-1">
        {['Chase ···4821', 'PayPal Business', 'Stripe Payout'].map((b) => (
          <div key={b} className="flex items-center justify-between">
            <span className="text-[8px] font-mono text-white/35">{b}</span>
            <span className="text-[8px] font-mono text-green-400/70">✓</span>
          </div>
        ))}
      </div>
    ),
    accent: '#86efac',
    tag: 'Mensual',
  },
  {
    id: 'tax',
    name: 'Resumen Fiscal',
    subtitle: 'Deducibles identificados · IRS-ready',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    preview: (
      <div className="flex gap-2">
        {[['Deducibles', '$12,400'], ['Schedule C', 'Listo']].map(([k, v]) => (
          <div key={k} className="flex-1 rounded px-1.5 py-1" style={{ background: 'rgba(163,230,53,0.07)' }}>
            <p className="text-[7px] font-mono text-white/30 uppercase">{k}</p>
            <p className="text-[10px] font-mono text-white/70 font-bold">{v}</p>
          </div>
        ))}
      </div>
    ),
    accent: '#a3e635',
    tag: 'Anual',
  },
]

// ─── Star rating component ────────────────────────────────────────────────────
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#14A800" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ClaridadDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-start">

      {/* ── LEFT: Digital product package ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Package header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="px-3 py-1.5 rounded-full text-xs font-mono font-medium flex items-center gap-2"
            style={{
              background: 'rgba(100,190,146,0.08)',
              border: '1px solid rgba(100,190,146,0.2)',
              color: '#64BE92',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Paquete mensual BookkeepingAlDía
          </div>
        </div>

        {/* Stacked document cards */}
        <div className="relative space-y-3">
          {DELIVERABLES.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-stretch rounded-xl overflow-hidden"
              style={{
                background: 'rgba(8, 20, 12, 0.95)',
                border: `1px solid rgba(100,190,146,0.12)`,
                boxShadow: `0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(${doc.id === 'pl' ? '100,190,146' : '255,255,255'},0.04)`,
              }}
            >
              {/* Color accent bar */}
              <div className="w-1 flex-shrink-0" style={{ background: doc.accent, opacity: 0.7 }} />

              {/* Card content */}
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `rgba(100,190,146,0.08)` }}
                    >
                      {doc.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">{doc.name}</p>
                      <p className="text-[10px] font-mono mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>
                        {doc.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                    <span
                      className="text-[9px] font-mono px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(100,190,146,0.1)',
                        border: '1px solid rgba(100,190,146,0.2)',
                        color: '#64BE92',
                      }}
                    >
                      ✓ Listo
                    </span>
                    <span className="text-[8px] font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>
                      {doc.tag}
                    </span>
                  </div>
                </div>

                {/* Mini data preview */}
                <div className="mt-1">{doc.preview}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Delivery confirmation */}
        <motion.div
          className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{
            background: 'rgba(100,190,146,0.06)',
            border: '1px solid rgba(100,190,146,0.18)',
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(100,190,146,0.15)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64BE92" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Entregado el 1° de cada mes</p>
            <p className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.38)' }}>
              PDF + acceso directo a QuickBooks Online
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── RIGHT: Copy + Real review ── */}
      <motion.div
        className="flex flex-col justify-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Benefits for tax preparers */}
        <div className="space-y-5 mb-10">
          {[
            {
              title: 'Libros listos antes de que los pidas',
              desc: 'No más emails de seguimiento. Cuando llegue la temporada, el P&L y Balance Sheet ya están en tu correo.',
              icon: '📬',
            },
            {
              title: 'Formato que ya conoces — QuickBooks Online',
              desc: 'Todo en la plataforma que usas para declarar. Sin conversiones, sin exportar, sin rehacer nada.',
              icon: '⚡',
            },
            {
              title: 'Cero preguntas del IRS por tu causa',
              desc: 'Cada gasto categorizado, cada cuenta conciliada. Los libros aguantan cualquier auditoría.',
              icon: '🛡️',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-base"
                style={{ background: 'rgba(100,190,146,0.08)', border: '1px solid rgba(100,190,146,0.12)' }}
              >
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: 'linear-gradient(to right, rgba(100,190,146,0.2), transparent)' }}
        />

        {/* Real Upwork review */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {/* Review header */}
          <div className="flex items-center gap-3 mb-4">
            {/* Upwork logo */}
            <div
              className="px-2.5 py-1 rounded-lg flex items-center gap-1.5"
              style={{ background: 'rgba(20,168,0,0.1)', border: '1px solid rgba(20,168,0,0.2)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#14A800">
                <path d="M18.461 14.162c-1.364 0-2.64-.484-3.63-1.28l.27-1.29.01-.053c.22-1.224 .913-3.282 3.35-3.282 1.758 0 3.188 1.43 3.188 3.189 0 1.76-1.43 2.716-3.188 2.716zm0-8.817c-2.76 0-4.912 1.754-5.78 4.649-.885-1.332-1.552-2.93-1.947-4.277H8.118v5.197c0 1.65-1.343 2.993-2.993 2.993-1.65 0-2.993-1.343-2.993-2.993V5.717H0v5.197c0 3.296 2.684 5.983 5.977 5.983 3.293 0 5.977-2.687 5.977-5.983v-.872c.387.802.85 1.612 1.39 2.363L11.23 19.53h2.64l1.046-4.97c1.015.74 2.252 1.164 3.545 1.164 3.292 0 5.539-2.268 5.539-5.508 0-3.06-2.247-5.871-5.539-5.871z" />
              </svg>
              <span className="text-[10px] font-mono font-semibold" style={{ color: '#14A800' }}>Upwork</span>
            </div>
            <Stars count={5} />
            <span className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Verificado
            </span>
          </div>

          {/* Quote block */}
          <blockquote
            className="relative rounded-2xl p-5"
            style={{
              background: 'rgba(20,168,0,0.05)',
              border: '1px solid rgba(20,168,0,0.15)',
            }}
          >
            {/* Opening quote mark */}
            <span
              className="absolute -top-3 left-4 text-4xl font-serif leading-none select-none"
              style={{ color: 'rgba(20,168,0,0.35)' }}
            >
              &ldquo;
            </span>
            <p className="text-sm leading-relaxed text-white/75 italic pt-1">
              Johan does exceptional work! The delivery was made within the estimated timeframe,
              and the analysis of the accounts, as well as the accounting setup, was very accurate.
              I will definitely work with him again in the future!{' '}
              <span className="text-white/95 font-semibold not-italic">100% Recommended service!</span>
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white/80">{UPWORK_QUOTE.author}</p>
                <p className="text-[10px] font-mono mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {UPWORK_QUOTE.location}
                </p>
              </div>
              <span
                className="text-[9px] font-mono px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(20,168,0,0.12)', border: '1px solid rgba(20,168,0,0.2)', color: '#6FDA44' }}
              >
                Top Rated · 100% JSS
              </span>
            </div>
          </blockquote>
        </motion.div>
      </motion.div>
    </div>
  )
}
