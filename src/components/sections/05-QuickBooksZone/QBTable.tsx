'use client'
import { motion } from 'framer-motion'
import { staggerFast, fadeInLeft } from '@/lib/animation-variants'
import { QB_TRANSACTIONS } from '@/lib/constants'

export default function QBTable() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: 'rgba(3, 12, 6, 0.9)',
        border: '1px solid rgba(100, 190, 146, 0.15)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      }}
    >
      {/* Table header */}
      <div
        className="grid grid-cols-4 gap-0 px-4 py-2.5 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
      >
        {['Fecha', 'Descripción', 'Categoría', 'Monto'].map((h) => (
          <span key={h} className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {QB_TRANSACTIONS.map((tx, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-4 gap-0 px-4 py-2.5 border-b group transition-colors duration-150"
            style={{
              borderColor: 'rgba(255,255,255,0.04)',
              borderLeft: '2px solid rgba(100,190,146,0.3)',
            }}
            variants={fadeInLeft}
            whileHover={{ backgroundColor: 'rgba(100, 190, 146, 0.04)' }}
          >
            <span className="text-[10px] font-mono text-white/35">{tx.date}</span>
            <span className="text-[10px] font-mono text-white/70">{tx.desc}</span>
            <span
              className="text-[9px] font-mono px-1.5 py-0.5 rounded self-center w-fit"
              style={{
                background: 'rgba(100,190,146,0.08)',
                color: 'rgba(100,190,146,0.7)',
              }}
            >
              {tx.category}
            </span>
            <div className="flex items-center justify-between">
              <span
                className="text-[10px] font-mono font-medium"
                style={{ color: tx.amount.startsWith('+') ? '#64BE92' : 'rgba(255,255,255,0.55)' }}
              >
                {tx.amount}
              </span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64BE92" strokeWidth="2.5" className="opacity-60">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <div
        className="px-4 py-2.5 flex items-center justify-between"
        style={{ background: 'rgba(100,190,146,0.04)' }}
      >
        <span className="text-[9px] font-mono text-brand-light/50">
          ✓ Conciliación completa
        </span>
        <span className="text-[9px] font-mono text-white/25">
          QuickBooks Online
        </span>
      </div>
    </div>
  )
}
