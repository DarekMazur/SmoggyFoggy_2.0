'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@/utils/lib/styles/theme'
import GlobalStyle from '@/utils/lib/styles/GlobalStyle'
import background from '@/assets/images/bgr.jpg'

const AppProviders = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle $background={background} />
    {children}
  </ThemeProvider>
)

export default AppProviders
