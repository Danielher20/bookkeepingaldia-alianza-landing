'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import QBTable from './QBTable'
import QBCharts from './QBCharts'
import SectionLabel from '@/components/ui/SectionLabel'
import GoldBadge from '@/components/ui/GoldBadge'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animation-variants'

export default function QuickBooksZone() {
  return (
    <section
      className="relative py-28 bg-grid-lines overflow-hidden"
      style={{ backgroundColor: '#0D2A1D' }}
    >
      {/* Grid glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(100,190,146,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-14 space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div className="flex items-center gap-3 flex-wrap" variants={fadeInUp}>
            <SectionLabel color="green">La Herramienta</SectionLabel>
            <GoldBadge>QuickBooks ProAdvisor Platinum Nivel 2</GoldBadge>
          </motion.div>

          <motion.h2
            className="font-display font-bold text-display-lg text-white max-w-2xl"
            variants={fadeInUp}
          >
            Los libros de tus clientes en{' '}
            <span className="text-gradient-green">QuickBooks Online</span>
            {' '}— el formato que ya conoces
          </motion.h2>

          <motion.p className="text-base text-muted max-w-xl leading-relaxed" variants={fadeInUp}>
            No hojas de cálculo. No Excel imposible de auditar. Cada LLC organizada
            en QuickBooks con la estructura correcta — lista para que <strong className="text-white">tú declares
            sin tener que rehacer nada</strong>.
          </motion.p>

          {/* Real QB cert badges */}
          <motion.div className="pt-4" variants={fadeInUp}>
            <div
              className="inline-block px-6 py-4 rounded-2xl"
              style={{
                background: '#ffffff',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1)',
              }}
            >
              <Image
                src="/assets/certs/qb-badges.webp"
                alt="QuickBooks Certified: Online ProAdvisor, Level 1, Platinum"
                width={600}
                height={120}
                className="h-16 w-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.div className="flex flex-wrap items-center gap-4" variants={fadeInUp}>
            {[
              { icon: '🏆', text: '200+ LLCs organizadas en QB' },
              { icon: '✓', text: 'ProAdvisor Platinum — certificación más alta' },
              { icon: '⚡', text: 'Integración bancaria directa' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5">
                <span className="text-sm">{item.icon}</span>
                <span className="text-xs text-muted font-mono">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Content grid */}
        <div className="space-y-6">
          {/* Charts row */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <QBCharts />
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <QBTable />
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mt-28" />
    </section>
  )
}
