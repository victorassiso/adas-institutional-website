import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ADAS | Associação dos Direitos dos Animais de Saquarema',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
