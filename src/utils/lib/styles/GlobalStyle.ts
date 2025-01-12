import { createGlobalStyle } from 'styled-components'
import { StaticImageData } from 'next/image'

const GlobalStyle = createGlobalStyle<{
  $isDark?: boolean
  $background: StaticImageData
}>`
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
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme, $isDark }) =>
      $isDark ? theme.colors.white : theme.colors.black};
    background: ${({
      $background,
    }) => `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url(${$background.src}) no-repeat center/cover fixed`};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.5;
  } 
`

export default GlobalStyle
