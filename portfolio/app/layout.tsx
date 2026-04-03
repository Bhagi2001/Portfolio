import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: 'Bhagya Welivita',
  description:
    'Portfolio of Bhagya Welivita – UI/UX & Frontend Enthusiast based in Kandy, building intuitive digital experiences.',
  authors: [{ name: 'Bhagya Welivita' }],
  keywords: ['UI/UX', 'Frontend', 'React', 'Portfolio', 'Software Engineering', 'Sri Lanka'],
  icons: {
    icon: '/avatar1.png',
  },
  openGraph: {
    title: 'Bhagya Welivita | UX Portfolio',
    description: 'Software Engineering student at SUSL crafting digital products and experiences.',
    type: 'website',
    images: ['/avatar1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/avatar1.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-white text-charcoal`}>{children}</body>
    </html>
  )
}
