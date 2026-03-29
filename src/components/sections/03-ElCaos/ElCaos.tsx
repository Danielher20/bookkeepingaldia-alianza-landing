'use client'
import { motion } from 'framer-motion'
import ChaosTransactions from './ChaosTransactions'
import SectionLabel from '@/components/ui/SectionLabel'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animation-variants'

export default function ElCaos() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 60% 30%, rgba(80, 20, 20, 0.15) 0%, #111111 60%)',
      }}
    >
      {/* Red ambient */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(220, 50, 50, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: copy */}
          <motion.div
            className="space-y-6 lg:pt-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel color="red">El Problema</SectionLabel>
            </motion.div>

            <motion.h2
              className="font-display font-bold text-display-lg text-white leading-[1.05]"
              variants={fadeInUp}
            >
              Cada mes sin bookkeeping es{' '}
              <span style={{ color: '#FCA5A5' }}>deuda acumulada</span>{' '}
              con el IRS
            </motion.h2>

            <motion.p className="text-base text-muted leading-relaxed" variants={fadeInUp}>
              La mayoría de dueños de LLC piensan que &ldquo;no pasa nada&rdquo; si no organizan sus libros.
              Hasta que llega la temporada de impuestos — o peor, una auditoría.
            </motion.p>

            {/* Warning cards */}
            <motion.div className="space-y-3" variants={staggerContainer}>
              {[
                { icon: '⚠', text: 'Multas de hasta $25,000 por Form 5472 incorrecto', red: true },
                { icon: '📋', text: 'Sin libros organizados no puedes deducir gastos legítimos', red: false },
                { icon: '⏰', text: 'Cleanup de 2+ años cuesta 5x más que mantenimiento mensual', red: false },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: item.red ? 'rgba(239, 68, 68, 0.08)' : 'rgba(255,255,255,0.03)',
                    border: item.red ? '1px solid rgba(239,68,68,0.2)' : '1px solid rgba(255,255,255,0.06)',
                  }}
                  variants={fadeInUp}
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: item.red ? '#FCA5A5' : 'rgba(255,255,255,0.6)' }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Big warning */}
            <motion.div
              className="px-5 py-4 rounded-xl"
              style={{
                background: 'rgba(239, 68, 68, 0.06)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
              }}
              variants={scaleIn}
              animate={{
                boxShadow: ['0 0 0px rgba(239,68,68,0)', '0 0 30px rgba(239,68,68,0.12)', '0 0 0px rgba(239,68,68,0)'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-sm font-mono text-red-300 text-center">
                ¿Cuántos meses llevas sin organizar tus libros?
              </p>
            </motion.div>
          </motion.div>

          {/* Right: chaotic transactions */}
          <div>
            <ChaosTransactions />

            {/* Stress indicators */}
            <motion.div
              className="mt-4 flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {['Sin clasificar × 10', '?? × 3', 'Revisar × 4', 'Monto desconocido', 'Moneda mixta'].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-mono px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.15)',
                    color: '#FCA5A5',
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #030F08)' }}
      />
    </section>
  )
}
