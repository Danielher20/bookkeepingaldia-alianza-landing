'use client'
import { motion } from 'framer-motion'
import ClaridadDashboard from './ClaridadDashboard'
import SectionLabel from '@/components/ui/SectionLabel'
import { fadeInUp, staggerContainer } from '@/lib/animation-variants'

export default function LaClaridad() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(14, 61, 44, 0.4) 0%, #030F08 65%)',
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(100,190,146,0.3), transparent)' }}
      />

      {/* Ambient glow */}
      <div
        className="absolute left-1/4 top-1/3 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(100,190,146,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
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
            <SectionLabel color="green">Lo que entregas cada mes</SectionLabel>
          </motion.div>

          <motion.h2
            className="font-display font-bold text-display-lg text-white"
            variants={fadeInUp}
          >
            Un paquete de claridad{' '}
            <span className="text-gradient-green">listo para declarar</span>
          </motion.h2>

          <motion.p className="text-base text-muted max-w-xl mx-auto leading-relaxed" variants={fadeInUp}>
            Cada cliente tuyo que trabaja con nosotros llega a la temporada de impuestos
            con libros impecables — sin que tú tengas que perseguirlos por un solo número.
          </motion.p>
        </motion.div>

        {/* Dashboard content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <ClaridadDashboard />
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider mt-28" />
    </section>
  )
}
