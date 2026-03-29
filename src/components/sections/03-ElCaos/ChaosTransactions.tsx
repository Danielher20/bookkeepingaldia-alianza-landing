'use client'
import { motion } from 'framer-motion'
import { staggerFast, fadeInLeft } from '@/lib/animation-variants'
import { CHAOS_TRANSACTIONS } from '@/lib/constants'

export default function ChaosTransactions() {
  return (
    <motion.div
      className="rounded-xl overflow-hidden"
      style={{
        background: 'rgba(10, 5, 5, 0.85)',
        border: '1px solid rgba(239, 68, 68, 0.2)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(239,68,68,0.08)',
      }}
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: 'rgba(239,68,68,0.15)' }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[11px] font-mono text-red-400/60 ml-2">⚠ Transacciones sin clasificar</span>
        </div>
        <span className="text-[10px] font-mono text-red-400/50">
          {CHAOS_TRANSACTIONS.length} pendientes
        </span>
      </div>

      {/* Transactions */}
      <motion.div
        className="divide-y"
        style={{ borderColor: 'rgba(255,255,255,0.04)' }}
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {CHAOS_TRANSACTIONS.map((tx, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-between px-4 py-2.5 relative"
            style={{
              transform: `rotate(${tx.rot}deg)`,
              filter: tx.blur ? 'blur(1px)' : 'none',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }}
            variants={fadeInLeft}
            custom={i}
          >
            <div className="flex items-center gap-2.5">
              {tx.flag ? (
                <span className="text-red-400 text-xs flex-shrink-0">!</span>
              ) : (
                <span className="text-white/15 text-xs flex-shrink-0">·</span>
              )}
              <span className="text-[11px] font-mono text-white/60">{tx.desc}</span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span
                className="text-[9px] font-mono px-2 py-0.5 rounded"
                style={{
                  background: tx.cat === 'Sin clasificar' || tx.cat === '??' ? 'rgba(239,68,68,0.1)' : 'rgba(234,179,8,0.08)',
                  color: tx.cat === 'Sin clasificar' || tx.cat === '??' ? '#FCA5A5' : '#FCD34D',
                }}
              >
                {tx.cat}
              </span>
              <span
                className="text-[11px] font-mono"
                style={{
                  color: tx.amount.includes('+') ? 'rgba(255,255,255,0.5)' : 'rgba(255,100,100,0.7)',
                }}
              >
                {tx.amount}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
