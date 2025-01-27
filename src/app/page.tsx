'use client'

import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const StyledHome = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
      color: ${({ theme }) => theme.colors.darkRed};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
`

const Home = () => {
  const { t } = useTranslation()

  return (
    <StyledHome>
      <div>{t(`test`)}</div>
      <div>
        Lorem Ipsum <p>Dolor sit amet</p>
      </div>
    </StyledHome>
  )
}

export default Home
