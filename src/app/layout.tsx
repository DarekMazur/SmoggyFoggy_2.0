import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@/utils/lib/styles/theme'
import GlobalStyle from '@/utils/lib/styles/GlobalStyle'

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeProvider>
  )
}

export default RootLayout
