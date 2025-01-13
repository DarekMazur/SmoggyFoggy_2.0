'use client'

import styled from 'styled-components'

const StyledHome = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.darkRed};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`

const Home = () => {
  return (
    <StyledHome>
      Lorem Ipsum <p>Dolor sit amet</p>
    </StyledHome>
  )
}

export default Home
