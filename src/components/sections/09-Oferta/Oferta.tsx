'use client'
import { motion } from 'framer-motion'
import PricingCard from './PricingCard'
import SectionLabel from '@/components/ui/SectionLabel'
import { staggerContainer, fadeInUp } from '@/lib/animation-variants'
import { PRICING_PLANS, BRAND } from '@/lib/constants'

export default function Oferta() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, rgba(14, 61, 44, 0.15) 0%, #030F08 60%)',
      }}
    >
      {/* Top divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(242,201,76,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel color="gold">La Oferta</SectionLabel>
          </motion.div>

          <motion.h2
            className="font-display font-bold text-display-lg text-white"
            variants={fadeInUp}
          >
            Reajuste financiero para clientes atrasados -
            <span className="text-gradient-gold"> tu solo los conectas</span>
          </motion.h2>

          <motion.p className="text-base text-muted max-w-xl mx-auto leading-relaxed" variants={fadeInUp}>
            Segun la propuesta comercial, el reajuste financiero 12MTM parte desde $360 al ano.
            Es la oferta ideal para clientes que llegan tarde, desordenados y necesitan ponerse en regla antes de seguir avanzando.
          </motion.p>

          {/* Trust strip */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
            variants={fadeInUp}
          >
            {['Desde $360 / ano', '12 meses organizados', 'Diagnostico gratuito', 'Comision por 6 meses'].map(
              (item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64BE92" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-xs font-mono text-muted">{item}</span>
                </div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Main offer + partner commission */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.85fr)] gap-5 lg:gap-6 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PRICING_PLANS.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} delay={i * 0.1} />
          ))}

          <motion.div
            className="relative rounded-2xl p-6 flex flex-col h-full"
            style={{
              background: 'rgba(3, 15, 8, 0.7)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
            }}
            variants={fadeInUp}
          >
            <div className="mb-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-brand-light/70">
                Comision del partner
              </p>
              <h3 className="font-display font-bold text-2xl text-white mt-2">
                Te pagamos comision por 6 meses por cada cliente referido
              </h3>
              <p className="text-sm text-muted mt-3 leading-relaxed">
                El documento comercial indica que el partner recibe pagos durante 6 meses por cada cliente que avance con nosotros.
                Asi conviertes cada referido en ingreso recurrente sin operar el servicio.
              </p>
            </div>

            <div
              className="rounded-2xl p-4 mb-5"
              style={{
                background: 'rgba(14, 61, 44, 0.42)',
                border: '1px solid rgba(242, 201, 76, 0.18)',
              }}
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#F2C94C]">
                Ejemplo del PDF
              </p>
              <p className="font-display font-bold text-3xl text-white mt-2">
                $300
              </p>
              <p className="text-sm text-white/70 mt-2 leading-relaxed">
                Un cliente de <span className="text-white font-semibold">$250/mes</span> genera
                <span className="text-white font-semibold"> $300 para el partner</span>
                {' '}a razon de <span className="text-white font-semibold">$50/mes x 6 meses</span>.
              </p>
            </div>

            <div className="space-y-3 flex-1">
              {[
                'Comision pagada durante 6 meses por cliente.',
                'Tu rol es conectar la oportunidad; nosotros hacemos la operacion.',
                'A mas referidos, mayor crecimiento pasivo para tu despacho o firma.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64BE92" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-sm text-white/65 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Custom plan note */}
        <motion.p
          className="text-center text-sm text-muted mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Si el cliente tiene mas de 12 meses de atraso o un caso mas complejo,{' '}
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-light hover:text-brand-light/80 underline underline-offset-2 transition-colors"
          >
            hablemos y cotizamos un reajuste personalizado.
          </a>
        </motion.p>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mt-28" />
    </section>
  )
}
