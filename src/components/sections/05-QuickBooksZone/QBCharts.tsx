'use client'
import { motion } from 'framer-motion'
import { lineChartDraw } from '@/lib/animation-variants'

// Expense breakdown donut segments
const EXPENSE_CATS = [
  { label: 'Marketing', pct: 38, color: '#64BE92' },
  { label: 'Software', pct: 24, color: '#F2C94C' },
  { label: 'Servicios', pct: 22, color: '#297A57' },
  { label: 'Infraest.', pct: 16, color: '#0E3D2C' },
]

const PL_PATH = 'M0,48 C8,46 16,43 24,44 C32,45 40,50 48,48 C56,46 64,37 72,38 C80,39 88,43 96,40 C104,37 112,27 120,28 C128,29 136,33 144,30 C152,27 160,17 168,19 C176,21 184,24 192,21 C200,18 208,11 216,12 C224,13 232,7 240,8 C248,9 254,4 264,3'

export default function QBCharts() {
  // Build conic-gradient from percentages
  let cumulativePct = 0
  const conicParts = EXPENSE_CATS.map((cat) => {
    const start = cumulativePct
    cumulativePct += cat.pct
    return `${cat.color} ${start}% ${cumulativePct}%`
  })
  const conicGradient = `conic-gradient(from 0deg, ${conicParts.join(', ')})`

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* P&L Line chart */}
      <div
        className="rounded-xl px-4 py-4"
        style={{
          background: 'rgba(3, 12, 6, 0.9)',
          border: '1px solid rgba(100,190,146,0.12)',
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] font-mono text-white/35 uppercase tracking-wider">
            P&L Trend 2024
          </p>
          <span
            className="text-[9px] font-mono px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(100,190,146,0.1)', color: '#64BE92' }}
          >
            ↑ +18%
          </span>
        </div>
        <svg viewBox="0 0 264 56" fill="none" className="w-full" style={{ height: '56px' }}>
          <defs>
            <linearGradient id="plGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#64BE92" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#64BE92" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Area */}
          <path
            d={`${PL_PATH} L264,56 L0,56 Z`}
            fill="url(#plGrad)"
          />
          {/* Line */}
          <motion.path
            d={PL_PATH}
            stroke="#64BE92"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            variants={lineChartDraw}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.circle
            cx="264"
            cy="3"
            r="2.5"
            fill="#64BE92"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, type: 'spring' }}
          />
        </svg>
        <div className="flex justify-between mt-2">
          {['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((m) => (
            <span key={m} className="text-[8px] font-mono text-white/20">{m}</span>
          ))}
        </div>
      </div>

      {/* Expense donut */}
      <div
        className="rounded-xl px-4 py-4"
        style={{
          background: 'rgba(3, 12, 6, 0.9)',
          border: '1px solid rgba(100,190,146,0.12)',
        }}
      >
        <p className="text-[10px] font-mono text-white/35 uppercase tracking-wider mb-4">
          Gastos por categoría
        </p>
        <div className="flex items-center gap-6">
          {/* Donut */}
          <motion.div
            className="relative flex-shrink-0"
            style={{ width: 72, height: 72 }}
            initial={{ opacity: 0, rotate: -90 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{ background: conicGradient }}
            />
            <div
              className="absolute inset-[14px] rounded-full"
              style={{ background: 'rgba(3, 12, 6, 0.95)' }}
            />
          </motion.div>
          {/* Legend */}
          <div className="space-y-1.5 flex-1">
            {EXPENSE_CATS.map((cat) => (
              <div key={cat.label} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: cat.color }} />
                  <span className="text-[10px] font-mono text-white/50">{cat.label}</span>
                </div>
                <span className="text-[10px] font-mono text-white/40">{cat.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
