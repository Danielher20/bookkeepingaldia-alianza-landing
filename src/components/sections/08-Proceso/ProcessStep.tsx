'use client'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animation-variants'
import type { ProcessStep as ProcessStepType } from '@/types'

interface ProcessStepProps {
  step: ProcessStepType
  index: number
  isLast: boolean
}

export default function ProcessStep({ step, index, isLast }: ProcessStepProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center"
      variants={fadeInUp}
    >
      {/* Connector line (not on last) */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] h-px"
          style={{
            background: 'linear-gradient(90deg, rgba(100,190,146,0.3), rgba(100,190,146,0.08))',
            zIndex: 0,
          }}
        >
          <motion.div
            className="h-full origin-left"
            style={{ background: 'rgba(100,190,146,0.4)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      )}

      {/* Step circle */}
      <motion.div
        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-5"
        style={{
          background: 'rgba(14, 61, 44, 0.6)',
          border: '1px solid rgba(100, 190, 146, 0.25)',
          boxShadow: '0 0 0 6px rgba(14,61,44,0.3)',
        }}
        whileHover={{
          scale: 1.08,
          boxShadow: '0 0 0 8px rgba(14,61,44,0.4), 0 0 30px rgba(100,190,146,0.2)',
          transition: { type: 'spring', stiffness: 400, damping: 20 },
        }}
      >
        {/* Large watermark number */}
        <span
          className="absolute font-display font-bold text-4xl pointer-events-none select-none"
          style={{ color: 'rgba(100,190,146,0.08)', lineHeight: 1 }}
        >
          {step.number}
        </span>
        <span className="text-lg relative z-10">{step.icon}</span>
      </motion.div>

      {/* Content */}
      <div className="space-y-2 max-w-[160px]">
        <p className="text-[10px] font-mono text-brand-light/60 uppercase tracking-widest">
          Paso {step.number}
        </p>
        <p className="font-display font-bold text-base text-white">{step.name}</p>
        <p className="text-xs text-muted leading-relaxed">{step.description}</p>
        <span
          className="inline-block text-[9px] font-mono px-2 py-0.5 rounded-full mt-1"
          style={{
            background: 'rgba(100,190,146,0.08)',
            border: '1px solid rgba(100,190,146,0.15)',
            color: 'rgba(100,190,146,0.7)',
          }}
        >
          {step.duration}
        </span>
      </div>
    </motion.div>
  )
}
