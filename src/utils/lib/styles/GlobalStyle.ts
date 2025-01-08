import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	*, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    padding: 0;
    line-height: 2;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.5;
  }
`

export default GlobalStyle
