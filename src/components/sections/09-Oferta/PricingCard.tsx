'use client'
import { motion } from 'framer-motion'
import { scaleInSpring } from '@/lib/animation-variants'
import CTAButton from '@/components/ui/CTAButton'
import type { PricingPlan } from '@/types'
import { BRAND } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  plan: PricingPlan
  delay?: number
}

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64BE92" strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export default function PricingCard({ plan, delay = 0 }: PricingCardProps) {
  return (
    <motion.div
      className={cn(
        'relative rounded-2xl p-6 flex flex-col h-full',
        plan.featured && 'lg:scale-105 lg:-translate-y-2'
      )}
      style={{
        background: plan.featured
          ? 'rgba(14, 61, 44, 0.55)'
          : 'rgba(3, 15, 8, 0.7)',
        border: plan.featured
          ? '1px solid rgba(242, 201, 76, 0.3)'
          : '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(16px)',
        boxShadow: plan.featured
          ? '0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(242,201,76,0.08)'
          : '0 16px 48px rgba(0,0,0,0.4)',
        animation: plan.featured ? 'pulseGold 3s ease-in-out infinite' : 'none',
      }}
      variants={scaleInSpring}
      transition={{ delay }}
    >
      {/* Featured badge */}
      {plan.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className="inline-block text-[10px] font-semibold font-mono px-3 py-1 rounded-full uppercase tracking-widest text-bg-void"
            style={{ background: 'linear-gradient(135deg, #F2C94C, #C9A52E)' }}
          >
            Más popular
          </span>
        </div>
      )}

      {/* Plan name */}
      <div className="mb-4">
        <h3
          className="font-display font-bold text-lg text-white whitespace-pre-line leading-tight"
        >
          {plan.name}
        </h3>
        <p className="text-xs text-muted mt-1">{plan.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-5">
        {plan.pricePrefix && (
          <p
            className="text-[10px] font-mono uppercase tracking-[0.22em] mb-1"
            style={{ color: plan.featured ? '#F2C94C' : 'rgba(255,255,255,0.45)' }}
          >
            {plan.pricePrefix}
          </p>
        )}
        <div className="flex items-baseline gap-1.5">
          <span
            className="font-display font-bold text-3xl"
            style={{ color: plan.featured ? '#F2C94C' : '#ffffff' }}
          >
            ${plan.price}
          </span>
          <span className="text-sm text-muted font-mono">USD / {plan.period}</span>
        </div>
        <p className="text-[10px] font-mono text-white/30 mt-1">
          Ideal para: {plan.idealFor}
        </p>
        {plan.priceNote && (
          <p className="text-[11px] leading-relaxed text-white/45 mt-2">
            {plan.priceNote}
          </p>
        )}
      </div>

      {/* Divider */}
      <div
        className="w-full h-px mb-5"
        style={{
          background: plan.featured
            ? 'rgba(242,201,76,0.15)'
            : 'rgba(255,255,255,0.06)',
        }}
      />

      {/* Features */}
      <ul className="space-y-2.5 flex-1 mb-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <span className="flex-shrink-0 mt-0.5">
              <CheckIcon />
            </span>
            <span className="text-xs text-white/65 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <CTAButton
        href={BRAND.calendarUrl}
        target="_blank"
        variant={plan.featured ? 'primary' : 'ghost'}
        size="md"
        className="w-full justify-center"
      >
        {plan.cta}
      </CTAButton>
    </motion.div>
  )
}
