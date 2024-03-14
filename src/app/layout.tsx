import './global.css'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

export const metadata = {
  title: 'ADAS | Associação dos Direitos dos Animais de Saquarema',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>
        <div className="m-auto max-w-screen-xl">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
