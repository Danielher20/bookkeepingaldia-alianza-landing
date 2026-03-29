'use client'
import { motion } from 'framer-motion'
import { lineChartDraw } from '@/lib/animation-variants'

const TRANSACTIONS = [
  { desc: 'Shopify Payout', cat: 'Ingresos', amount: '+$8,400', color: '#64BE92', sign: true },
  { desc: 'Google Ads', cat: 'Marketing', amount: '-$1,200', color: '#F2C94C', sign: false },
  { desc: 'Stripe Transfer', cat: 'Ingresos', amount: '+$3,200', color: '#64BE92', sign: true },
  { desc: 'Notion + Zoom', cat: 'Software', amount: '-$165', color: '#94A3B8', sign: false },
]

// SVG P&L line — upward trend over 12 months
const LINE_PATH = 'M0,52 C8,50 16,46 24,47 C32,48 40,54 48,51 C56,48 64,38 72,39 C80,40 88,44 96,41 C104,38 112,28 120,29 C128,30 136,34 144,31 C152,28 160,18 168,20 C176,22 184,26 192,23 C200,20 208,12 216,13 C224,14 232,8 240,9 C248,10 254,5 264,4'
const AREA_PATH = 'M0,52 C8,50 16,46 24,47 C32,48 40,54 48,51 C56,48 64,38 72,39 C80,40 88,44 96,41 C104,38 112,28 120,29 C128,30 136,34 144,31 C152,28 160,18 168,20 C176,22 184,26 192,23 C200,20 208,12 216,13 C224,14 232,8 240,9 C248,10 254,5 264,4 L264,70 L0,70 Z'

const MONTH_LABELS = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

export default function HeroDashboardUI() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(3, 12, 6, 0.92)',
        border: '1px solid rgba(100, 190, 146, 0.18)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-[11px] font-mono text-white/30 ml-2">Dashboard · Q4 2024</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className="px-2 py-0.5 rounded text-[9px] font-mono font-medium"
            style={{ background: 'rgba(100,190,146,0.12)', color: '#64BE92' }}
          >
            ✓ Conciliado
          </div>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-3 gap-0 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        {[
          { label: 'Ingresos Netos', value: '$48,200', change: '+12%', up: true },
          { label: 'Gastos Deducibles', value: '$12,400', change: '-3%', up: false },
          { label: 'Balance Neto', value: '$35,800', change: '+18%', up: true },
        ].map((kpi, i) => (
          <div
            key={i}
            className="px-4 py-3"
            style={{
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}
          >
            <p className="text-[10px] font-mono text-white/35 uppercase tracking-wider mb-1">{kpi.label}</p>
            <p className="text-base font-bold font-mono text-white">{kpi.value}</p>
            <p
              className="text-[10px] font-mono mt-0.5"
              style={{ color: kpi.up ? '#64BE92' : '#F87171' }}
            >
              {kpi.up ? '↑' : '↓'} {kpi.change}
            </p>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="px-4 pt-3 pb-2">
        <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider mb-2">P&L Trend — 2024</p>
        <div className="relative">
          <svg viewBox="0 0 264 72" fill="none" className="w-full" style={{ height: '72px' }}>
            {/* Area fill */}
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#64BE92" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#64BE92" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={AREA_PATH} fill="url(#areaGrad)" />
            {/* Animated line */}
            <motion.path
              d={LINE_PATH}
              stroke="#64BE92"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              variants={lineChartDraw}
              initial="hidden"
              animate="visible"
            />
            {/* End dot */}
            <motion.circle
              cx="264"
              cy="4"
              r="3"
              fill="#64BE92"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, type: 'spring' }}
            />
          </svg>
          {/* Month labels */}
          <div className="flex justify-between mt-1">
            {MONTH_LABELS.map((m) => (
              <span key={m} className="text-[8px] font-mono text-white/20">{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="px-4 pb-3">
        <div
          className="flex items-center justify-between mb-2 pt-2 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider">Transacciones recientes</p>
          <span className="text-[9px] font-mono text-brand-light/60">847 reconciliadas</span>
        </div>
        <div className="space-y-1.5">
          {TRANSACTIONS.map((tx, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-between py-1"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: tx.color }}
                />
                <span className="text-[11px] font-mono text-white/70">{tx.desc}</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="text-[9px] font-mono px-1.5 py-0.5 rounded"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.35)',
                  }}
                >
                  {tx.cat}
                </span>
                <span
                  className="text-[11px] font-mono font-medium"
                  style={{ color: tx.sign ? '#64BE92' : 'rgba(255,255,255,0.6)' }}
                >
                  {tx.amount}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
