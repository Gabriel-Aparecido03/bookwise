import type { Metadata } from 'next'
import { Nunito_Sans, } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Bookwise',
  description: 'Creating by Gabriel Silva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} text-gray-100 text-m font-medium bg-gray-800`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
