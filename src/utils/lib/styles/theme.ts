import { montserrat, cabin } from '@/utils/lib/styles/fonts'

const theme = {
  colors: {
    darkRed: '#A9001F',
    lightRed: '#EE042E',
    grey: '#C4C4C4',
    white: '#F3F3F3',
    black: '#131313',
    darkGreen: '#2E9809',
    lightGreen: '#71EF45',
    steelBlue: '#21424D',
    darkBlue: '#56AAC5',
    lightBlue: '#A8E2F4',
  },

  fonts: {
    main: montserrat.style.fontFamily,
    header: cabin.style.fontFamily,
  },

  fontWeight: {
    regular: '400',
    semiBold: '700',
    bold: '900',
  },
}

export default theme
