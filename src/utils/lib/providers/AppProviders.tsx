'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@/utils/lib/styles/theme'
import GlobalStyle from '@/utils/lib/styles/GlobalStyle'

const AppProviders = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default AppProviders
