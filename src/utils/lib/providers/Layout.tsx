import { ReactNode, useContext } from 'react'
import { ContentContext } from '@/store/ContextProvider'
import GlobalStyle from '@/utils/lib/styles/GlobalStyle'

const Layout = ({ children }: { children: ReactNode }) => {
  const { mode } = useContext(ContentContext)

  return (
    <>
      <GlobalStyle $isDark={mode === 'dark'} />
      {children}
    </>
  )
}

export default Layout
