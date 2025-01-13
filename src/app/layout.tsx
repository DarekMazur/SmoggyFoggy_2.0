import type { Metadata } from 'next'
import { ReactNode } from 'react'
import AppProviders from '@/utils/lib/providers/AppProviders'
import Header from '@/components/Organisms/Header/Header'

export const metadata: Metadata = {
  title: 'Smoggy Foggy',
  description: 'Sprawdź jakość powietrza',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <AppProviders>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </AppProviders>
  )
}

export default RootLayout
