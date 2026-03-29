import dynamic from 'next/dynamic'
import HeroCinematic from '@/components/sections/01-HeroCinematic/HeroCinematic'

// Partner narrative order:
// Hero -> Chaos transition -> El Caos -> La Claridad ->
// QB Credenciales -> Founder Story -> Team -> Client Logos -> Fiverr -> Upwork -> Proceso -> Oferta -> Cierre

const TransitionChaos = dynamic(
  () => import('@/components/sections/02-TransitionChaos/TransitionChaos'),
  { ssr: false }
)
const ElCaos = dynamic(
  () => import('@/components/sections/03-ElCaos/ElCaos'),
  { ssr: false }
)
const LaClaridad = dynamic(
  () => import('@/components/sections/04-LaClaridad/LaClaridad'),
  { ssr: false }
)
const QuickBooksZone = dynamic(
  () => import('@/components/sections/05-QuickBooksZone/QuickBooksZone'),
  { ssr: false }
)
const FounderStory = dynamic(
  () => import('@/components/sections/11-FounderStory/FounderStory'),
  { ssr: false }
)
const Team = dynamic(
  () => import('@/components/sections/12-Team/Team'),
  { ssr: false }
)
const ClientLogos = dynamic(
  () => import('@/components/sections/13-ClientLogos/ClientLogos'),
  { ssr: false }
)
const FiverrZone = dynamic(
  () => import('@/components/sections/06-FiverrZone/FiverrZone'),
  { ssr: false }
)
const UpworkZone = dynamic(
  () => import('@/components/sections/07-UpworkZone/UpworkZone'),
  { ssr: false }
)
const Proceso = dynamic(
  () => import('@/components/sections/08-Proceso/Proceso'),
  { ssr: false }
)
const Oferta = dynamic(
  () => import('@/components/sections/09-Oferta/Oferta'),
  { ssr: false }
)
const Cierre = dynamic(
  () => import('@/components/sections/10-Cierre/Cierre'),
  { ssr: false }
)

export default function SalesExperience() {
  return (
    <main className="relative">
      <HeroCinematic />
      <TransitionChaos />
      <ElCaos />
      <LaClaridad />
      <QuickBooksZone />
      <FounderStory />
      <Team />
      <ClientLogos />
      <FiverrZone />
      <UpworkZone />
      <Proceso />
      <Oferta />
      <Cierre />
    </main>
  )
}
