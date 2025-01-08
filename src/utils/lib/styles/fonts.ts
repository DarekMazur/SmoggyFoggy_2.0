// eslint-disable-next-line camelcase
import { Montserrat, Cabin_Sketch } from 'next/font/google'

export const montserrat = Montserrat({
  weight: ['400', '700', '900'],
  style: 'normal',
  subsets: ['latin'],
})

export const cabin = Cabin_Sketch({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
})
