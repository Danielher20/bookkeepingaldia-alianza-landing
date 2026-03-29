'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { FOUNDER_TIMELINE } from '@/lib/constants'

const fadeInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
}

export default function FounderStory() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(14,61,44,0.35) 0%, transparent 60%), #030F08',
      }}
    >
      {/* Decorative background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[160px] font-display font-black select-none pointer-events-none uppercase leading-none"
        style={{ color: 'rgba(41,122,87,0.04)', whiteSpace: 'nowrap' }}
      >
        PDVSA → USA
      </div>

      {/* Ambient glow */}
      <div
        className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(41,122,87,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel color="gold">El Fundador</SectionLabel>
          </motion.div>
          <motion.h2
            className="font-display font-bold text-display-md text-white mt-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            18 años de rigor financiero corporativo,{' '}
            <span className="text-gradient-green">ahora al servicio de emprendedores</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-base text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Johan Garcia no llegó al bookkeeping por accidente. Llegó con dos décadas de experiencia gestionando
            presupuestos millonarios en una de las mayores petroleras del mundo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT: Photo + Quote ── */}
          <motion.div
            className="space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Photo card */}
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(14,61,44,0.3)',
                  border: '1px solid rgba(100,190,146,0.15)',
                  boxShadow: '0 0 60px rgba(41,122,87,0.15)',
                }}
              >
                <Image
                  src="/assets/team/johan.webp"
                  alt="Johan Garcia — CEO & Fundador de BookkeepingAlDía"
                  width={600}
                  height={600}
                  className="w-full aspect-square object-cover object-top"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(3,15,8,0.85) 0%, transparent 50%)',
                  }}
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display font-bold text-2xl text-white">Johan Garcia</p>
                  <p className="text-brand-light text-sm font-mono mt-1">CEO & Fundador · BookkeepingAlDía</p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {['QB ProAdvisor Platinum', 'QB Online Certified', 'QB Level 1'].map((cert) => (
                      <span
                        key={cert}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(100,190,146,0.15)',
                          border: '1px solid rgba(100,190,146,0.3)',
                          color: '#64BE92',
                        }}
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote block */}
            <motion.div
              className="relative p-6 rounded-2xl"
              style={{
                background: 'rgba(14,61,44,0.25)',
                border: '1px solid rgba(100,190,146,0.12)',
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div
                className="absolute top-4 left-6 text-5xl font-display leading-none"
                style={{ color: 'rgba(100,190,146,0.25)' }}
              >
                &ldquo;
              </div>
              <p className="text-white/80 leading-relaxed text-sm pt-4 pl-4">
                En PDVSA aprendí que los números no mienten. Un balance mal hecho puede costarle millones
                a una empresa. Cuando fundé BookkeepingAlDía, traje ese mismo rigor al mundo de los emprendedores
                latinoamericanos — porque ellos también merecen contabilidad de nivel corporativo.
              </p>
              <p className="mt-3 text-xs font-mono text-brand-light pl-4">
                — Jhonathan Garcia, Fundador
              </p>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Timeline ── */}
          <motion.div
            className="space-y-0"
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="relative pl-8">
              {/* Vertical line */}
              <motion.div
                className="absolute left-3 top-0 bottom-0 w-px"
                style={{ transformOrigin: 'top', background: 'linear-gradient(to bottom, transparent, rgba(100,190,146,0.5) 10%, rgba(100,190,146,0.5) 90%, transparent)' }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              />

              {FOUNDER_TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="relative mb-10 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-8 top-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: item.year === 'Hoy'
                        ? 'linear-gradient(135deg, #F2C94C, #C9A52E)'
                        : 'rgba(100,190,146,0.15)',
                      border: item.year === 'Hoy'
                        ? '2px solid #F2C94C'
                        : '1px solid rgba(100,190,146,0.4)',
                      boxShadow: item.year === 'Hoy' ? '0 0 16px rgba(242,201,76,0.4)' : undefined,
                    }}
                  >
                    {item.year === 'Hoy' ? (
                      <span className="text-[8px] font-black text-bg-void">★</span>
                    ) : (
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#64BE92' }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className="p-5 rounded-xl transition-all duration-300 hover:border-brand-light/30"
                    style={{
                      background: 'rgba(14,61,44,0.2)',
                      border: `1px solid ${item.year === 'Hoy' ? 'rgba(242,201,76,0.25)' : 'rgba(100,190,146,0.1)'}`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                        style={{
                          background: item.year === 'Hoy'
                            ? 'rgba(242,201,76,0.15)'
                            : 'rgba(100,190,146,0.12)',
                          color: item.year === 'Hoy' ? '#F2C94C' : '#64BE92',
                        }}
                      >
                        {item.year}
                      </span>
                      <h3 className="font-semibold text-white text-sm">{item.event}</h3>
                    </div>
                    <p className="text-muted text-xs leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
