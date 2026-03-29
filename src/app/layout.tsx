import type { Metadata } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SalesNav from '@/components/layout/SalesNav'
import SalesProgress from '@/components/layout/SalesProgress'

const poppinsSans = Poppins({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const poppinsDisplay = Poppins({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BookkeepingAlDía — Contabilidad clara para tu LLC en USA',
  description:
    'Ayudamos a dueños de LLC en USA a tener su contabilidad clara, organizada y lista para el IRS. QuickBooks ProAdvisor Platinum Nivel 2. 900+ LLCs organizadas.',
  openGraph: {
    title: 'BookkeepingAlDía',
    description: 'Contabilidad clara para tu LLC en USA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${poppinsSans.variable} ${poppinsDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-bg-void text-white overflow-x-hidden">
        <SalesProgress />
        <SalesNav />
        {children}
      </body>
    </html>
  )
}
