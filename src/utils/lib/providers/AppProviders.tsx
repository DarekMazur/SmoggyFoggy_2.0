'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@/utils/lib/styles/theme'
import '@/i18n/config'
import { Provider } from 'react-redux'
import { store } from '@/store'
import Layout from '@/utils/lib/providers/Layout'

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default AppProviders
