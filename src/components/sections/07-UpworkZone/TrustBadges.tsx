'use client'
import { motion } from 'framer-motion'
import { staggerContainer, scaleInSpring } from '@/lib/animation-variants'
import StatCounter from '@/components/ui/StatCounter'
import StarRating from '@/components/ui/StarRating'
import { UPWORK_BADGES, UPWORK_QUOTE } from '@/lib/constants'

export default function TrustBadges() {
  return (
    <div className="space-y-8">
      {/* Badge grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {UPWORK_BADGES.map((badge) => (
          <motion.div
            key={badge.label}
            className="px-4 py-4 rounded-xl text-center"
            style={{
              background: 'rgba(10, 22, 40, 0.7)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(12px)',
            }}
            variants={scaleInSpring}
            whileHover={{
              y: -4,
              borderColor: 'rgba(100,190,146,0.25)',
              transition: { type: 'spring', stiffness: 400, damping: 24 },
            }}
          >
            {badge.label === 'Job Success Score' ? (
              <p className="font-display font-bold text-2xl text-brand-gold mb-1">
                <StatCounter value={100} suffix="%" />
              </p>
            ) : (
              <p className="font-display font-bold text-2xl text-white mb-1">{badge.value}</p>
            )}
            <p className="text-xs text-white/60 font-semibold leading-tight mb-0.5">{badge.label}</p>
            {badge.sub && (
              <p className="text-[9px] font-mono text-white/30">{badge.sub}</p>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.div
        className="px-6 py-6 rounded-xl relative"
        style={{
          background: 'rgba(10, 22, 40, 0.5)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {/* Big quote mark */}
        <span
          className="absolute top-3 left-5 font-display font-bold text-5xl leading-none select-none pointer-events-none"
          style={{ color: 'rgba(100,190,146,0.12)' }}
        >
          &ldquo;
        </span>

        <p className="font-display italic text-base text-white/70 leading-relaxed relative z-10">
          {UPWORK_QUOTE.text}
        </p>
        <div className="flex items-center gap-3 mt-4">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: 'rgba(100,190,146,0.15)', color: '#64BE92' }}
          >
            T
          </div>
          <div>
            <p className="text-xs font-semibold text-white">{UPWORK_QUOTE.author}</p>
            <p className="text-[10px] font-mono text-muted">{UPWORK_QUOTE.location}</p>
          </div>
          <StarRating rating={UPWORK_QUOTE.rating} size="sm" className="ml-auto" />
        </div>
      </motion.div>
    </div>
  )
}
