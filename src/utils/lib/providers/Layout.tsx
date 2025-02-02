import GlobalStyle from '@/utils/lib/styles/GlobalStyle'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Header from '@/components/Organisms/Header/Header'
import { ReactNode } from 'react'

const Layout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  const isDark = useSelector<RootState>((state) => state.mode)

  return (
    <>
      <GlobalStyle $isDark={isDark === 'dark'} />
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </>
  )
}

export default Layout
