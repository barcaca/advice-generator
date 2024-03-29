import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import '../styles/globals.css'
import { Providers } from './providers'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '800'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  authors: [{ name: 'Luan Barcaça', url: '' }],
  category: 'advice',
  creator: 'Luan Barcaça',
  title: 'Random Advice Generator',
  description:
    'Get personalized, thought-provoking advice at the click of a button.',
  keywords: [
    'advice',
    'inspiration',
    'motivation',
    'decision-making',
    'problem-solving',
    'self-improvement',
    'life-hacks',
    'randomizer',
    'generator',
    'Next.js',
    'React',
    'TypeScript',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-[#cee3e9] dark:bg-[#1f2632]">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
