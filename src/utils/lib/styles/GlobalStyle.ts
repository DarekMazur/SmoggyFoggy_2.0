import { createGlobalStyle, ExecutionContext } from 'styled-components'

interface ColorProps extends ExecutionContext {
  $isDark?: boolean
}

const GlobalStyle = createGlobalStyle`
	*, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: ${({ theme }) => theme.fonts.main};
  }
  
  body {
    margin: 0;
    padding: 0;
    line-height: 2;
    color: ${({ theme, $isDark }: ColorProps) =>
      $isDark ? theme.colors.white : theme.colors.black};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.5;
  } 
`

export default GlobalStyle
