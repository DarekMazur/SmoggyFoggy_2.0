import styled from 'styled-components'

const StyledLangIcon = styled.div<{ $src: string }>`
  position: relative;
  margin: 0.5rem;
  border-radius: 50%;
  background: ${({ $src }) => `url(${$src}) no-repeat center / cover`};
  height: 3rem;
  width: 3rem;
  border: 0;
  z-index: 2;
`

export default StyledLangIcon
