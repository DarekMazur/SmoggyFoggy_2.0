import styled from 'styled-components'

const LanguageSwitcherList = styled.ul<{ $visible?: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  position: absolute;
  transition: opacity 200ms ease;
`

export default LanguageSwitcherList
