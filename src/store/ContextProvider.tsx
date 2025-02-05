import { createContext, ReactNode, useState } from 'react'

export const ContentContext = createContext({
  mode: '',
  handleSetMode: () => {},
})

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState('light')

  const handleSetMode = () => {
    setMode((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ContentContext.Provider value={{ mode, handleSetMode }}>
      {children}
    </ContentContext.Provider>
  )
}

export default ContextProvider
