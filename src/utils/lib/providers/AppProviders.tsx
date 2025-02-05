'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@/utils/lib/styles/theme'
import '@/i18n/config'
import ContextProvider from '@/store/ContextProvider'
import Layout from '@/utils/lib/providers/Layout'

const AppProviders = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <Layout>{children}</Layout>
    </ContextProvider>
  </ThemeProvider>
)

export default AppProviders
