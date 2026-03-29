'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import { TEAM_MEMBERS } from '@/lib/constants'

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
  }),
}

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 80% 30%, rgba(14,61,44,0.2) 0%, transparent 60%), #030F08',
      }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-lines opacity-30 pointer-events-none" />

      {/* Ambient glow */}
      <div
        className="absolute right-0 top-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(41,122,87,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel color="green">El Equipo</SectionLabel>
          </motion.div>
          <motion.h2
            className="font-display font-bold text-display-md text-white mt-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tres especialistas certificados,{' '}
            <span className="text-gradient-green">un solo estándar de excelencia</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-base text-muted max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cada miembro del equipo está certificado en QuickBooks y especializado en LLCs de no-residentes en los EE.UU.
          </motion.p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{
                background: 'rgba(14,61,44,0.25)',
                border: '1px solid rgba(100,190,146,0.12)',
                boxShadow: '0 0 0 0 rgba(100,190,146,0)',
              }}
            >
              {/* Photo */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(3,15,8,0.9) 0%, rgba(3,15,8,0.2) 50%, transparent 100%)',
                  }}
                />

                {/* CEO badge */}
                {i === 0 && (
                  <div
                    className="absolute top-4 right-4 text-[10px] font-mono font-bold px-3 py-1 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #F2C94C, #C9A52E)',
                      color: '#030F08',
                      boxShadow: '0 0 16px rgba(242,201,76,0.5)',
                    }}
                  >
                    CEO & FUNDADOR
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-white">{member.name}</h3>
                <p className="text-brand-light text-sm font-medium mt-0.5">{member.role}</p>
                <p className="text-muted text-xs mt-1">{member.specialty}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(100,190,146,0.08)',
                        border: '1px solid rgba(100,190,146,0.2)',
                        color: 'rgba(100,190,146,0.8)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom glow on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to right, transparent, #64BE92, transparent)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom partner note */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-muted max-w-lg mx-auto">
            Cuando referes un cliente a nosotros, sabes exactamente quién lo va a atender —
            <span className="text-white"> con nombre, cara y certificación comprobada.</span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
