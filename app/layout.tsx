import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/ui/Header'
import PageTransition from '@/components/ui/PageTransition'
import StairTransition from '@/components/ui/StairTransition'
import { JetBrains_Mono } from 'next/font/google'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'], // Include the subset you need
  variable: '--font-jetbrains-mono', // CSS variable to use for the font
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Portfolio of Abdi',
  description: 'Hire a fullstack developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable}  antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
