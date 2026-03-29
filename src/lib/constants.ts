import type { PricingPlan, ProcessStep, Review, TrustBadge, TeamMember, FounderTimelineItem, ClientLogo } from '@/types'

export const BRAND = {
  name: 'BookkeepingAlDía',
  tagline: 'Claridad financiera para las LLCs de tus clientes',
  calendarUrl: 'https://calendly.com/bookkeepingaldia',
  whatsappUrl: 'https://wa.me/584245033580',
  fiverr: 'https://es.fiverr.com/johangarcia124',
  upwork: 'https://www.upwork.com/freelancers/~0194280015f53bd3c2',
}

export const HERO_STATS = [
  { label: 'LLCs organizadas', value: '200+' },
  { label: 'Calificación Fiverr', value: '5.0 ★' },
  { label: 'Job Success Upwork', value: '100%' },
]

// ─── TEAM ────────────────────────────────────────────────────────────────────

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Johan Garcia',
    role: 'CEO & Fundador',
    specialty: 'QuickBooks ProAdvisor Platinum',
    photo: '/assets/team/johan.webp',
    tags: ['QB ProAdvisor Platinum', 'QB Online Certified', 'QB Level 1'],
  },
  {
    name: 'Rafael Puentes',
    role: 'Especialista Contable',
    specialty: 'QuickBooks Desktop Expert',
    photo: '/assets/team/rafael.webp',
    tags: ['QB Desktop', 'Conciliación Bancaria', 'Cleanup Retroactivo'],
  },
  {
    name: 'Jonathan Ramírez',
    role: 'Analista Financiero',
    specialty: 'QuickBooks Online',
    photo: '/assets/team/jonathan.webp',
    tags: ['QB Online', 'Reportes P&L', 'Auditoría Interna'],
  },
]

// ─── FOUNDER STORY ───────────────────────────────────────────────────────────

export const FOUNDER_TIMELINE: FounderTimelineItem[] = [
  {
    year: '2002',
    event: 'PDVSA — Ingeniería financiera',
    detail: 'Jhonathan Garcia comienza su carrera en PDVSA, la petrolera estatal venezolana, gestionando presupuestos y análisis financieros a gran escala.',
  },
  {
    year: '2015',
    event: 'Planificación y Control de Gestión',
    detail: '13 años de experiencia gestionando más de $50M en presupuestos. Sistemas de reporting, control interno y auditoría a nivel corporativo.',
  },
  {
    year: '2021',
    event: 'Transición a EE.UU.',
    detail: 'Deja Venezuela con una misión clara: llevar rigor financiero corporativo al ecosistema de emprendedores latinoamericanos con LLCs en USA.',
  },
  {
    year: '2022',
    event: 'Funda BookkeepingAlDía',
    detail: 'Lanza el servicio especializándose en LLCs de no-residentes. Obtiene certificación QuickBooks ProAdvisor Platinum en su primer año.',
  },
  {
    year: 'Hoy',
    event: '+200 LLCs organizadas · 3 países',
    detail: 'Un equipo de 3 especialistas certificados, presencia en Fiverr (5.0★, 66 reviews) y Upwork (100% JSS, Top Rated), sirviendo clientes de Venezuela, Colombia, México y más.',
  },
]

// ─── CLIENT LOGOS ─────────────────────────────────────────────────────────────

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: '904 Auto Glass', src: '/assets/clients/904-auto-glass.png',
    width: 132, height: 78, surface: 'light',
    modal: { industry: 'Auto Glass & Windshield Repair', location: 'Florida, EE.UU.', channel: 'Fiverr', channelIcon: '🟢', services: ['Bookkeeping mensual', 'Reconciliación bancaria', 'Reporte P&L'], story: 'Llegaron con 14 meses de transacciones sin categorizar. Gastos de materiales, pagos de subcontratistas y cobros de seguros mezclados sin orden. En 3 semanas limpiamos el backlog completo y quedaron listos para su declaración anual.' },
  },
  {
    name: 'Simple Ready', src: '/assets/clients/simple-ready.png',
    width: 124, height: 84, surface: 'light',
    modal: { industry: 'Pintura & Limpieza Residencial', location: 'Texas, EE.UU.', channel: 'Referido', channelIcon: '🤝', services: ['Bookkeeping mensual', 'Separación gastos personales/negocio', 'Balance Sheet'], story: 'Los refirió otro cliente nuestro del área de Houston. Tenían gastos personales y del negocio completamente mezclados en la misma cuenta — red flag directo para el IRS. Reestructuramos el plan de cuentas y los mantuvimos al día mes a mes.' },
  },
  {
    name: '713 Cleaning', src: '/assets/clients/713-cleaning.png',
    width: 178, height: 64, surface: 'light',
    modal: { industry: 'Limpieza Comercial & Residencial', location: 'Houston, Texas (área 713)', channel: 'Fiverr', channelIcon: '🟢', services: ['Bookkeeping mensual', 'Reporte de gastos deducibles', 'Resumen fiscal anual'], story: 'Empresa de limpieza con múltiples empleados, pagos en efectivo y gastos de suministros difíciles de rastrear. Nos encontraron en Fiverr y en el primer mes establecimos un sistema de categorización específico para el sector de servicios.' },
  },
  {
    name: 'DS Planet', src: '/assets/clients/ds-planet.png',
    width: 126, height: 78, surface: 'light',
    modal: { industry: 'Servicios Digitales & Tecnología', location: 'Colombia / EE.UU.', channel: 'Upwork', channelIcon: '🔵', services: ['Configuración QuickBooks Online', 'Bookkeeping mensual', 'Reportes para inversionistas'], story: 'Startup digital que operaba sin ningún sistema contable. Contrataron en Upwork para setup desde cero — creamos el plan de cuentas, conectamos todas las fuentes de ingreso y establecimos el flujo mensual de reportes.' },
  },
  {
    name: 'Sinergy Systems', src: '/assets/clients/sinergy-systems.png',
    width: 188, height: 54, surface: 'light',
    modal: { industry: 'Consultoría IT & Sistemas', location: 'Venezuela / EE.UU.', channel: 'Fiverr', channelIcon: '🟢', services: ['Limpieza de backlog 2 años', 'Reconciliación bancaria', 'Bookkeeping mensual'], story: 'Empresa de consultoría con 2 años sin contabilidad organizada. Encontraron nuestro perfil en Fiverr buscando especialistas en LLCs de no-residentes. Resolvimos el backlog completo en 6 semanas y quedaron completamente al día.' },
  },
  {
    name: 'Duzter', src: '/assets/clients/duzter.png',
    width: 140, height: 56, surface: 'light',
    modal: { industry: 'E-commerce & Logística', location: 'México / EE.UU.', channel: 'Upwork', channelIcon: '🔵', services: ['Categorización de transacciones', 'Conciliación Stripe/PayPal', 'P&L mensual'], story: 'Tienda online con ventas por Shopify, Stripe y PayPal — tres fuentes de ingreso distintas sin integración contable. Conectamos todo a QuickBooks y mantenemos los libros limpios mes a mes para que declaren sin contratiempos.' },
  },
  {
    name: 'My Little Family', src: '/assets/clients/my-little-family.png',
    width: 122, height: 86, surface: 'light',
    modal: { industry: 'Cuidado Infantil & Servicios Familiares', location: 'Texas, EE.UU.', channel: 'Referido por preparador', channelIcon: '🤝', services: ['Separación finanzas personales/negocio', 'Bookkeeping mensual', 'Preparación para impuestos'], story: 'Nos llegaron referidos directamente por su preparador de impuestos — exactamente el tipo de alianza que buscamos. Finanzas completamente mezcladas. Trabajamos en coordinación con su contador para entregarle los libros listos cada temporada.' },
  },
  {
    name: 'Ventura Insurance', src: '/assets/clients/ventura.png',
    width: 186, height: 58, surface: 'light',
    modal: { industry: 'Seguros & Income Tax', location: 'EE.UU.', channel: 'Fiverr', channelIcon: '🟢', services: ['Bookkeeping mensual', 'Reporte de comisiones por línea', 'Balance Sheet trimestral'], story: 'Agencia de seguros con múltiples fuentes de comisiones — MGA, aseguradoras directas y clientes de income tax. Necesitaban reportar cada línea de negocio por separado. Encontraron nuestro perfil en Fiverr con 5.0★ y empezamos ese mismo mes.' },
  },
  {
    name: 'Rancho Mateo', src: '/assets/clients/rancho-mateo.webp',
    width: 168, height: 72, surface: 'dark',
    modal: { industry: 'Restaurante Colombiano', location: 'EE.UU.', channel: 'Referido', channelIcon: '🤝', services: ['Bookkeeping mensual', 'Control de inventario contable', 'Reportes de costos de ventas'], story: 'Restaurante colombiano referido por un cliente previo. El sector tiene uno de los perfiles contables más complejos — efectivo, tarjetas, propinas, inventario, costos de alimentos. Organizamos todo bajo la estructura correcta para su LLC.' },
  },
  {
    name: 'NovaComp', src: '/assets/clients/novacomp.webp',
    width: 198, height: 44, surface: 'light',
    modal: { industry: 'Tecnología & Software', location: 'Venezuela / EE.UU.', channel: 'Upwork', channelIcon: '🔵', services: ['Setup QuickBooks completo', 'Bookkeeping mensual', 'Reportes financieros para socios'], story: 'Empresa de software con socios en múltiples países. Nos contrataron en Upwork para setup inicial y sistema contable desde cero. Hoy reciben sus reportes mensuales el primer día de cada mes, sin excepción, listos para cualquier auditoría.' },
  },
]

// ─── PROCESS ─────────────────────────────────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'Diagnóstico',
    icon: '◎',
    description:
      'Revisamos el estado actual de la LLC del cliente: volumen de transacciones, herramientas bancarias y el caos acumulado. Sin compromiso.',
    duration: '20 min · Gratis',
  },
  {
    number: '02',
    name: 'Acceso',
    icon: '⇌',
    description:
      'Conectamos QuickBooks Online a todas las cuentas bancarias, Stripe, PayPal y demás fuentes de ingreso y gasto del negocio.',
    duration: '1–2 días',
  },
  {
    number: '03',
    name: 'Organización',
    icon: '▦',
    description:
      'Clasificamos y categorizamos todas las transacciones con la estructura correcta para una LLC de no residente en los EE.UU.',
    duration: '3–10 días',
  },
  {
    number: '04',
    name: 'Bookkeeping',
    icon: '⚡',
    description:
      'Mantenimiento mensual continuo: conciliación bancaria, categorización de nuevas transacciones y resolución de discrepancias.',
    duration: 'Mensual',
  },
  {
    number: '05',
    name: 'Reportes',
    icon: '◈',
    description:
      'P&L, Balance Sheet y resumen fiscal entregados cada mes. Listos para el contador del cliente cuando llegue la temporada de impuestos.',
    duration: 'Mensual + Anual',
  },
]

// ─── PRICING ──────────────────────────────────────────────────────────────────

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'cleanup',
    name: 'Reajuste Financiero\n12 MTM',
    tagline: 'Transforma un ano de caos en libros contables listos para taxes.',
    price: 360,
    pricePrefix: 'Desde',
    priceNote: 'El valor final depende del volumen, bancos y complejidad del atraso.',
    period: 'año',
    currency: 'USD',
    featured: true,
    idealFor: 'LLCs con hasta 12 meses sin organizar o con backlog contable.',
    features: [
      '12 meses organizados y conciliados',
      'Clasificacion y limpieza del atraso',
      'P&L + Balance Sheet del periodo',
      'Libros listos para presentar al preparador',
      'Diagnostico inicial gratuito',
    ],
    cta: 'Cotizar reajuste',
  },
]

// ─── FIVERR REVIEWS ───────────────────────────────────────────────────────────

export const FIVERR_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Carlos M.',
    location: 'Colombia',
    rating: 5,
    service: 'Bookkeeping Mensual',
    text: 'Johan organized 18 months of my LLC bookkeeping in record time. Clear reports, excellent communication. 100% recommended.',
    initials: 'CM',
    color: '#2563EB',
  },
  {
    id: '2',
    author: 'María V.',
    location: 'Venezuela',
    rating: 5,
    service: 'Cleanup 2 años',
    text: 'I had 2 years of untouched books. Johan cleaned everything, categorized every transaction and left me ready for the IRS. Excellent.',
    initials: 'MV',
    color: '#7C3AED',
  },
  {
    id: '3',
    author: 'Alejandro R.',
    location: 'México',
    rating: 5,
    service: 'Bookkeeping Mensual',
    text: "I've been with Johan for 8 months and the level of detail in the reports is impressive. My tax accountant loves it.",
    initials: 'AR',
    color: '#059669',
  },
  {
    id: '4',
    author: 'Sofía P.',
    location: 'Argentina',
    rating: 5,
    service: 'Reportes P&L',
    text: 'I needed a P&L to present to investors. Johan delivered it in 48 hours, perfect and in the correct format.',
    initials: 'SP',
    color: '#DB2777',
  },
  {
    id: '5',
    author: 'Diego F.',
    location: 'Chile',
    rating: 5,
    service: 'Cleanup 1 año',
    text: 'I thought organizing my books would take forever. Johan did it in 10 days. Very efficient and professional.',
    initials: 'DF',
    color: '#D97706',
  },
  {
    id: '6',
    author: 'Laura G.',
    location: 'Perú',
    rating: 5,
    service: 'Bookkeeping Mensual',
    text: 'I finally have real financial clarity. I know exactly what comes in, what goes out and what I can deduct. Invaluable.',
    initials: 'LG',
    color: '#0891B2',
  },
  {
    id: '7',
    author: 'Roberto S.',
    location: 'España',
    rating: 5,
    service: 'Cleanup 3 años',
    text: 'I had a 3-year mess. Johan not only cleaned it up, he explained each category and the reasoning behind it. Top.',
    initials: 'RS',
    color: '#4F46E5',
  },
  {
    id: '8',
    author: 'Ana C.',
    location: 'Ecuador',
    rating: 5,
    service: 'Bookkeeping Mensual',
    text: 'The best decision was hiring monthly bookkeeping. I save hours every month and sleep peacefully with everything up to date.',
    initials: 'AC',
    color: '#BE185D',
  },
]

// ─── UPWORK ───────────────────────────────────────────────────────────────────

export const UPWORK_BADGES: TrustBadge[] = [
  { label: 'Job Success Score', value: '100%', sub: 'Top Rated' },
  { label: 'Ingresos totales', value: '$10K+', sub: 'Proyectos completados' },
  { label: 'Trabajos completados', value: '38', sub: 'Contratos cerrados' },
  { label: 'Horas registradas', value: '782', sub: 'Horas en plataforma' },
  { label: 'Tarifa', value: '$40/hr', sub: 'Tarifa verificada' },
  { label: 'Tiempo de respuesta', value: '< 2h', sub: 'Promedio garantizado' },
]

export const UPWORK_QUOTE = {
  text: '"Johan does exceptional work! The delivery was made within the estimated timeframe, and the analysis of the accounts, as well as the accounting setup, was very accurate. I will definitely work with him again in the future! 100% Recommended service!"',
  author: 'Servicios de Bookkeeping',
  location: 'Mayo 2025 · Upwork',
  rating: 5,
}

// ─── QB TRANSACTIONS ──────────────────────────────────────────────────────────

export const QB_TRANSACTIONS = [
  { date: 'Nov 28', desc: 'Shopify Payout', category: 'Ingresos E-commerce', amount: '+$8,400.00', status: 'reconciled' },
  { date: 'Nov 26', desc: 'Google Ads', category: 'Marketing Digital', amount: '-$1,200.00', status: 'reconciled' },
  { date: 'Nov 25', desc: 'Stripe Transfer', category: 'Ingresos Servicios', amount: '+$3,200.00', status: 'reconciled' },
  { date: 'Nov 22', desc: 'Notion Pro Plan', category: 'Software SaaS', amount: '-$16.00', status: 'reconciled' },
  { date: 'Nov 20', desc: 'Zoom Annual', category: 'Software SaaS', amount: '-$149.00', status: 'reconciled' },
  { date: 'Nov 18', desc: 'Freelancer Payment', category: 'Servicios Contratados', amount: '-$950.00', status: 'reconciled' },
  { date: 'Nov 15', desc: 'Shopify Payout', category: 'Ingresos E-commerce', amount: '+$6,750.00', status: 'reconciled' },
  { date: 'Nov 12', desc: 'AWS Services', category: 'Infraestructura', amount: '-$87.40', status: 'reconciled' },
]

export const CHAOS_TRANSACTIONS = [
  { desc: 'Amazon *7R4', cat: 'Sin clasificar', amount: '-$1,247.00', rot: 1.5, blur: false, flag: true },
  { desc: 'Transferencia wire', cat: '??', amount: '+€3,400.00', rot: -2.1, blur: false, flag: false },
  { desc: 'PAYPAL *4829', cat: 'Revisar', amount: '-$89.00', rot: 0.8, blur: true, flag: false },
  { desc: 'Stripe Payout May', cat: 'Sin clasificar', amount: '+$???', rot: -1.4, blur: false, flag: true },
  { desc: 'GoDaddy *DOMAIN', cat: '??', amount: '-$45.00', rot: 2.3, blur: false, flag: false },
  { desc: 'WITHDRAW ACH', cat: 'Sin clasificar', amount: '-$3,000.00', rot: -0.9, blur: true, flag: true },
  { desc: 'Apple.com/bill', cat: 'Verificar', amount: '-$9.99', rot: 1.2, blur: false, flag: false },
  { desc: 'Transferencia int', cat: '??', amount: '+$720.00?', rot: -1.8, blur: false, flag: false },
  { desc: 'SHOPIFY PAYOUT', cat: 'Sin clasificar', amount: '+$???,???', rot: 0.5, blur: true, flag: true },
  { desc: 'FEE OVERDRAFT', cat: 'Revisar', amount: '-$35.00', rot: -2.5, blur: false, flag: true },
]
