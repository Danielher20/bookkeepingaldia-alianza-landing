'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import CTAButton from '@/components/ui/CTAButton'
import { BRAND } from '@/lib/constants'

const DiagnosticoVisual = () => (
  <div
    className="w-full overflow-hidden rounded-2xl"
    style={{ background: 'rgba(8,22,14,0.92)', border: '1px solid rgba(100,190,146,0.16)' }}
  >
    <div
      className="flex items-center gap-2 px-4 py-3"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="h-2 w-2 rounded-full bg-emerald-400/80" />
      <div className="h-2 w-2 rounded-full bg-yellow-400/70" />
      <div className="h-2 w-2 rounded-full bg-red-400/70" />
      <span className="ml-1 text-[10px] font-mono uppercase tracking-[0.18em] text-white/30">
        Discovery
      </span>
    </div>
    <div className="space-y-2 px-4 py-4">
      {[
        { label: 'QB Online activo', value: 'Si', ok: true },
        { label: 'Meses atrasados', value: '14 meses', ok: false },
        { label: 'Bancos conectables', value: '3 fuentes', ok: true },
        { label: 'Alcance estimado', value: 'Cleanup + mensual', ok: true },
      ].map((row) => (
        <div key={row.label} className="flex items-center justify-between gap-3">
          <span className="text-[11px] text-white/42">{row.label}</span>
          <span className="text-[11px] font-semibold" style={{ color: row.ok ? '#64BE92' : '#F87171' }}>
            {row.value}
          </span>
        </div>
      ))}
    </div>
  </div>
)

const AccesoVisual = () => (
  <div className="space-y-2.5">
    {[
      { name: 'QuickBooks Online', state: 'Conectado', color: '#2CA01C' },
      { name: 'Chase Business', state: 'Sincronizado', color: '#2563EB' },
      { name: 'Stripe', state: 'Sincronizado', color: '#635BFF' },
      { name: 'PayPal', state: 'Sincronizado', color: '#003087' },
    ].map((item) => (
      <div
        key={item.name}
        className="flex items-center justify-between rounded-2xl px-4 py-3"
        style={{ background: 'rgba(8,22,14,0.92)', border: '1px solid rgba(100,190,146,0.12)' }}
      >
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded-sm" style={{ background: item.color }} />
          <span className="text-[11px] text-white/68">{item.name}</span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-emerald-300">
          {item.state}
        </span>
      </div>
    ))}
  </div>
)

const OrganizacionVisual = () => (
  <div
    className="w-full overflow-hidden rounded-2xl"
    style={{ background: 'rgba(8,22,14,0.92)', border: '1px solid rgba(100,190,146,0.14)' }}
  >
    <div
      className="flex items-center justify-between px-4 py-3"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/30">
        Clasificacion
      </span>
      <span className="rounded-full px-2 py-1 text-[10px] font-mono text-emerald-300" style={{ background: 'rgba(100,190,146,0.12)' }}>
        847 revisadas
      </span>
    </div>
    <div className="divide-y divide-white/5">
      {[
        { desc: 'Shopify payout', cat: 'Ingresos', color: '#64BE92' },
        { desc: 'Google Ads', cat: 'Marketing', color: '#60A5FA' },
        { desc: 'Amazon mix', cat: 'Personal detectado', color: '#F87171' },
        { desc: 'Notion + Zoom', cat: 'Software', color: '#A78BFA' },
      ].map((item) => (
        <div key={item.desc} className="flex items-center justify-between gap-3 px-4 py-3">
          <span className="text-[11px] text-white/55">{item.desc}</span>
          <span className="text-[11px] font-semibold" style={{ color: item.color }}>
            {item.cat}
          </span>
        </div>
      ))}
    </div>
  </div>
)

const BookkeepingVisual = () => (
  <div
    className="w-full rounded-2xl p-4"
    style={{ background: 'rgba(8,22,14,0.92)', border: '1px solid rgba(100,190,146,0.14)' }}
  >
    <div className="mb-3 flex items-center justify-between">
      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/30">
        Mantenimiento
      </span>
      <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-emerald-300">
        Al dia
      </span>
    </div>
    <div className="grid grid-cols-4 gap-2">
      {['Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic', 'Ene', 'Feb'].map((month, index) => (
        <div key={month} className="text-center">
          <div
            className="flex h-8 items-center justify-center rounded-xl text-[11px] font-semibold"
            style={{
              background: index < 6 ? 'rgba(100,190,146,0.16)' : 'rgba(255,255,255,0.06)',
              color: index < 6 ? '#64BE92' : 'rgba(255,255,255,0.3)',
              border: index < 6 ? '1px solid rgba(100,190,146,0.22)' : '1px solid rgba(255,255,255,0.04)',
            }}
          >
            {index < 6 ? 'OK' : 'Pend'}
          </div>
          <p className="mt-1 text-[10px] text-white/28">{month}</p>
        </div>
      ))}
    </div>
  </div>
)

const ReportesVisual = () => (
  <div className="space-y-2.5">
    {[
      { name: 'Profit and Loss', meta: 'Comparativo mensual', color: '#64BE92' },
      { name: 'Balance Sheet', meta: 'Cuentas conciliadas', color: '#60A5FA' },
      { name: 'Resumen para declarar', meta: 'Entregable para el preparador', color: '#F59E0B' },
    ].map((item) => (
      <div
        key={item.name}
        className="flex items-center justify-between rounded-2xl px-4 py-3"
        style={{ background: 'rgba(8,22,14,0.92)', border: '1px solid rgba(100,190,146,0.12)' }}
      >
        <div>
          <p className="text-[12px] font-semibold text-white/80">{item.name}</p>
          <p className="text-[11px] text-white/36">{item.meta}</p>
        </div>
        <div className="h-3 w-3 rounded-full" style={{ background: item.color }} />
      </div>
    ))}
  </div>
)

type SceneStep = {
  number: string
  name: string
  department: string
  tagline: string
  description: string
  duration: string
  accent: string
  room: {
    left: string
    top: string
  }
  desks: number[]
  outputs: string[]
  visual: ReactNode
}

const STEPS: SceneStep[] = [
  {
    number: '01',
    name: 'Diagnostico',
    department: 'Recepcion y Discovery',
    tagline: 'Primero entendemos el caos real del cliente.',
    description:
      'Aqui validamos herramientas, backlog, bancos y volumen real para definir el camino correcto antes de tocar la contabilidad.',
    duration: '20 min gratis',
    accent: '#64BE92',
    room: { left: '6%', top: '9%' },
    desks: [28, 18, 34, 22, 16, 26],
    outputs: [
      'Inventario de accesos y cuentas del cliente.',
      'Alcance claro para cleanup o servicio mensual.',
      'Ruta de trabajo que entiende el preparador desde el inicio.',
    ],
    visual: <DiagnosticoVisual />,
  },
  {
    number: '02',
    name: 'Acceso',
    department: 'Integraciones',
    tagline: 'Conectamos todo lo que mueve dinero.',
    description:
      'Este departamento enlaza QuickBooks con bancos, pasarelas y fuentes de pago para que el flujo entre limpio y sin capturas manuales.',
    duration: '1 a 2 dias',
    accent: '#60A5FA',
    room: { left: '58%', top: '12%' },
    desks: [18, 28, 20, 34, 16, 24],
    outputs: [
      'QuickBooks conectado a bancos y plataformas clave.',
      'Sincronizacion inicial validada por nuestro equipo.',
      'Base lista para clasificar sin duplicados ni vacios.',
    ],
    visual: <AccesoVisual />,
  },
  {
    number: '03',
    name: 'Organizacion',
    department: 'Clasificacion y Cleanup',
    tagline: 'Cada transaccion encuentra su lugar.',
    description:
      'Aqui clasificamos, separamos gastos personales y ordenamos la estructura financiera para que el libro ya hable el idioma del preparador.',
    duration: '3 a 10 dias',
    accent: '#F59E0B',
    room: { left: '32%', top: '36%' },
    desks: [24, 32, 18, 28, 22, 16],
    outputs: [
      'Categorias limpias y gastos improcedentes detectados.',
      'Meses atrasados puestos en orden con criterio contable.',
      'Libros consistentes antes de pasar a operacion mensual.',
    ],
    visual: <OrganizacionVisual />,
  },
  {
    number: '04',
    name: 'Bookkeeping',
    department: 'Operacion Mensual',
    tagline: 'Mantenemos el orden mes tras mes.',
    description:
      'Una vez limpio, este equipo se encarga de la conciliacion continua para que el cliente no vuelva a caer en atraso.',
    duration: 'Mensual',
    accent: '#A78BFA',
    room: { left: '7%', top: '62%' },
    desks: [18, 28, 20, 30, 24, 16],
    outputs: [
      'Conciliaciones permanentes y movimientos al dia.',
      'Seguimiento operativo para que nada se acumule.',
      'Visibilidad continua sin depender de urgencias de temporada.',
    ],
    visual: <BookkeepingVisual />,
  },
  {
    number: '05',
    name: 'Reportes',
    department: 'Control y Entregables',
    tagline: 'Entregamos claridad lista para declarar.',
    description:
      'Desde aqui salen los reportes financieros y el resumen util para que el preparador tome el caso con menos preguntas y mas certeza.',
    duration: 'Cada inicio de mes',
    accent: '#F87171',
    room: { left: '58%', top: '64%' },
    desks: [30, 18, 26, 16, 32, 20],
    outputs: [
      'Profit and Loss y Balance Sheet del periodo.',
      'Resumen util para la preparacion de impuestos.',
      'Entregable claro para contador, firma o tax preparer.',
    ],
    visual: <ReportesVisual />,
  },
]

function DepartmentRoom({
  step,
  active,
  onSelect,
}: {
  step: SceneStep
  active: boolean
  onSelect: (step: SceneStep) => void
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(step)}
      className="absolute h-[116px] w-[142px] text-left sm:h-[132px] sm:w-[160px] lg:h-[150px] lg:w-[184px]"
      style={{ left: step.room.left, top: step.room.top, zIndex: active ? 4 : 1 }}
      whileHover={{ y: active ? -10 : -6 }}
      whileTap={{ scale: 0.98 }}
      animate={{ y: active ? -8 : 0, scale: active ? 1.03 : 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    >
      <div
        className="absolute inset-x-4 bottom-[-18px] h-7 rounded-full blur-xl"
        style={{ background: `${step.accent}3D` }}
      />
      <div
        className="absolute inset-x-3 bottom-[-14px] h-4 rounded-b-[16px]"
        style={{
          background: `${step.accent}42`,
          transform: 'skewX(-34deg)',
          transformOrigin: 'left bottom',
        }}
      />
      <div
        className="absolute right-[-11px] top-4 bottom-3 w-3 rounded-r-[12px]"
        style={{
          background: `${step.accent}2E`,
          transform: 'skewY(-48deg)',
          transformOrigin: 'right top',
        }}
      />

      <div
        className="relative flex h-full flex-col overflow-hidden rounded-[26px] border px-4 py-4 backdrop-blur-md"
        style={{
          background: active
            ? `linear-gradient(165deg, rgba(12,34,23,0.98) 0%, rgba(9,22,16,0.94) 100%)`
            : 'linear-gradient(165deg, rgba(10,26,18,0.94) 0%, rgba(7,18,13,0.9) 100%)',
          borderColor: active ? `${step.accent}88` : 'rgba(100,190,146,0.14)',
          boxShadow: active
            ? `0 22px 48px rgba(0,0,0,0.34), 0 0 0 1px ${step.accent}22 inset`
            : '0 14px 30px rgba(0,0,0,0.26)',
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/34">
            Depto {step.number}
          </span>
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: step.accent }} />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-1.5">
          {step.desks.map((deskHeight, index) => (
            <div
              key={`${step.number}-${index}`}
              className="rounded-[10px]"
              style={{
                height: `${deskHeight}px`,
                background: index % 2 === 0 ? `${step.accent}2E` : 'rgba(255,255,255,0.07)',
                border: `1px solid ${index % 2 === 0 ? `${step.accent}3A` : 'rgba(255,255,255,0.05)'}`,
              }}
            />
          ))}
        </div>

        <div className="mt-auto pt-3">
          <p className="text-[12px] font-semibold text-white">{step.department}</p>
          <p className="mt-1 text-[11px] leading-relaxed text-white/48">{step.tagline}</p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-full mt-4 hidden w-max max-w-[150px] -translate-x-1/2 rounded-full px-3 py-1.5 text-center text-[10px] font-mono uppercase tracking-[0.14em] md:block"
        style={{
          background: active ? `${step.accent}1F` : 'rgba(255,255,255,0.05)',
          border: `1px solid ${active ? `${step.accent}42` : 'rgba(255,255,255,0.08)'}`,
          color: active ? step.accent : 'rgba(255,255,255,0.45)',
        }}
      >
        {step.name}
      </div>
    </motion.button>
  )
}

const CalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

export default function Proceso() {
  const [activeStep, setActiveStep] = useState<SceneStep>(STEPS[0])

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(14,61,44,0.25) 0%, #030F08 55%)',
      }}
    >
      <div className="section-divider absolute left-0 right-0 top-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          className="mb-16 space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel color="green">El Proceso</SectionLabel>
          <h2 className="font-display text-display-lg font-bold text-white">
            Explora la oficina operativa que convierte caos en{' '}
            <span className="text-gradient-green">claridad financiera</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted">
            Cada departamento representa una etapa real del trabajo. Toca cualquier area para ver que hace el equipo
            y que termina recibiendo el preparador de impuestos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.25fr_0.95fr] xl:items-start">
          <motion.div
            className="relative overflow-hidden rounded-[34px] border p-4 sm:p-6"
            style={{
              background: 'linear-gradient(180deg, rgba(7,22,15,0.96) 0%, rgba(3,15,8,0.96) 100%)',
              borderColor: 'rgba(100,190,146,0.12)',
              boxShadow: '0 30px 70px rgba(0,0,0,0.28)',
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-grid-lines opacity-[0.08]" />
            <div
              className="pointer-events-none absolute inset-x-8 top-8 h-36 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(100,190,146,0.18) 0%, transparent 70%)' }}
            />

            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-emerald-300/70">
                  Oficina interactiva
                </p>
                <p className="mt-1 text-sm text-white/55">
                  Selecciona un departamento para abrir su explicacion operativa.
                </p>
              </div>
              <div
                className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em]"
                style={{
                  background: 'rgba(100,190,146,0.1)',
                  border: '1px solid rgba(100,190,146,0.18)',
                  color: '#64BE92',
                }}
              >
                5 departamentos conectados
              </div>
            </div>

            <div className="relative h-[520px] sm:h-[590px]">
              <div
                className="pointer-events-none absolute left-[21%] top-[24%] h-9 w-[58%] rounded-[999px]"
                style={{
                  background: 'linear-gradient(90deg, rgba(100,190,146,0.12), rgba(100,190,146,0.05))',
                  border: '1px solid rgba(100,190,146,0.08)',
                }}
              />
              <div
                className="pointer-events-none absolute left-[44%] top-[25%] h-[40%] w-[12%] rounded-[32px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(100,190,146,0.12), rgba(100,190,146,0.05))',
                  border: '1px solid rgba(100,190,146,0.08)',
                }}
              />
              <div
                className="pointer-events-none absolute left-[21%] top-[56%] h-9 w-[58%] rounded-[999px]"
                style={{
                  background: 'linear-gradient(90deg, rgba(100,190,146,0.12), rgba(100,190,146,0.05))',
                  border: '1px solid rgba(100,190,146,0.08)',
                }}
              />

              {STEPS.map((step) => (
                <DepartmentRoom
                  key={step.number}
                  step={step}
                  active={activeStep.number === step.number}
                  onSelect={setActiveStep}
                />
              ))}
            </div>

            <div className="-mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1">
              {STEPS.map((step) => {
                const selected = step.number === activeStep.number

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(step)}
                    className="shrink-0 rounded-full px-3 py-2 text-[10px] font-mono uppercase tracking-[0.14em] transition-colors duration-200"
                    style={{
                      background: selected ? `${step.accent}16` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${selected ? `${step.accent}3D` : 'rgba(255,255,255,0.08)'}`,
                      color: selected ? step.accent : 'rgba(255,255,255,0.55)',
                    }}
                  >
                    Paso {step.number} - {step.name}
                  </button>
                )
              })}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.aside
              key={activeStep.number}
              className="relative overflow-hidden rounded-[32px] border p-6 sm:p-7"
              style={{
                background: 'linear-gradient(180deg, rgba(8,20,12,0.96) 0%, rgba(4,14,9,0.98) 100%)',
                borderColor: 'rgba(100,190,146,0.12)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
              }}
              initial={{ opacity: 0, x: 24, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -18, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="pointer-events-none absolute right-[-10%] top-[-10%] h-48 w-48 rounded-full blur-3xl"
                style={{ background: `radial-gradient(circle, ${activeStep.accent}22 0%, transparent 70%)` }}
              />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em]"
                    style={{
                      background: `${activeStep.accent}16`,
                      border: `1px solid ${activeStep.accent}32`,
                      color: activeStep.accent,
                    }}
                  >
                    Paso {activeStep.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/34">
                    {activeStep.duration}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-3xl font-bold text-white">{activeStep.name}</h3>
                <p className="mt-2 text-sm font-semibold" style={{ color: activeStep.accent }}>
                  {activeStep.department}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{activeStep.description}</p>

                <div className="mt-6 overflow-hidden rounded-[28px] p-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  {activeStep.visual}
                </div>

                <div className="mt-6">
                  <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/32">
                    Lo que recibe el preparador
                  </p>
                  <div className="mt-3 space-y-2.5">
                    {activeStep.outputs.map((output) => (
                      <div
                        key={output}
                        className="flex items-start gap-3 rounded-2xl px-4 py-3"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                      >
                        <div
                          className="mt-1 h-2.5 w-2.5 rounded-full"
                          style={{ background: activeStep.accent, boxShadow: `0 0 14px ${activeStep.accent}66` }}
                        />
                        <p className="text-sm leading-relaxed text-white/74">{output}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="mt-6 rounded-2xl px-4 py-3 text-[11px] leading-relaxed text-white/46"
                  style={{ background: 'rgba(100,190,146,0.06)', border: '1px solid rgba(100,190,146,0.1)' }}
                >
                  Cambia de departamento para recorrer todo el flujo operativo, desde discovery hasta los entregables
                  listos para declarar.
                </div>
              </div>
            </motion.aside>
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="mb-5 text-sm text-muted">
            El Paso 1 es gratuito. En 20 minutos alineamos alcance, prioridades y la ruta correcta para tu cliente.
          </p>
          <CTAButton href={BRAND.calendarUrl} target="_blank" variant="primary" size="md" icon={<CalIcon />}>
            Agendar diagnostico gratuito
          </CTAButton>
        </motion.div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  )
}
