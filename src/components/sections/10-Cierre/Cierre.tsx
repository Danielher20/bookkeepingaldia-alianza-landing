'use client'
import { motion } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'
import BrandLogo from '@/components/ui/BrandLogo'
import { BRAND } from '@/lib/constants'
import { staggerContainer, wordReveal } from '@/lib/animation-variants'

const HEADLINE_WORDS = 'Tus clientes organizados. Tu trabajo, más fácil.'.split(' ')

const CalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const WAIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.529 5.878L0 24l6.303-1.499A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.366l-.358-.213-3.742.89.921-3.645-.233-.375A9.775 9.775 0 012.182 12C2.182 6.572 6.572 2.182 12 2.182S21.818 6.572 21.818 12 17.428 21.818 12 21.818z" />
  </svg>
)

export default function Cierre() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden"
      style={{ background: '#030F08' }}
    >
      {/* Central ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(ellipse at 50% 55%, rgba(41, 122, 87, 0.1) 0%, transparent 65%)',
        }}
      />

      {/* Top divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          className="text-xs font-mono text-white/30 uppercase tracking-[0.2em] mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          · diagnóstico gratuito · sin compromiso ·
        </motion.p>

        {/* Main headline — word reveal */}
        <motion.h2
          className="font-display font-bold text-display-xl text-white leading-[1.05] mb-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              variants={wordReveal}
              className="inline-block mr-[0.22em]"
              style={{
                color:
                  word === 'organizados.' || word === 'fácil.'
                    ? '#64BE92'
                    : undefined,
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg text-muted leading-relaxed mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Agenda 20 minutos con nosotros. Al final sabrás exactamente cómo
          podemos <strong className="text-white">aliviar tu carga como preparador</strong> — con libros que ya vienen organizados,
          conciliados y listos para que declares sin contratiempos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <CTAButton
            href={BRAND.calendarUrl}
            target="_blank"
            variant="primary"
            size="lg"
            icon={<CalIcon />}
          >
            Agendar reunión de socio
          </CTAButton>
          <CTAButton
            href={BRAND.whatsappUrl}
            target="_blank"
            variant="ghost"
            size="lg"
            icon={<WAIcon />}
          >
            Escribir por WhatsApp
          </CTAButton>
        </motion.div>

        {/* Trust micro-copy */}
        <motion.p
          className="text-xs text-faint mt-6 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          20 minutos · Gratis · Sin compromiso · Respuesta en &lt; 2 horas
        </motion.p>
      </div>

      {/* Footer strip */}
      <motion.footer
        className="absolute bottom-0 left-0 right-0 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <BrandLogo size="sm" />
        <div className="flex items-center gap-4">
          <a
            href={BRAND.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-white/25 hover:text-white/50 transition-colors"
          >
            Fiverr
          </a>
          <a
            href={BRAND.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-white/25 hover:text-white/50 transition-colors"
          >
            Upwork
          </a>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-white/25 hover:text-white/50 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </motion.footer>
    </section>
  )
}
