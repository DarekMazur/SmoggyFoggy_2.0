import styled from 'styled-components'

const LanguageSwitcherList = styled.ul<{ $visible?: boolean }>`
  list-style: none;
  margin: 0.5rem;
  //opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  position: absolute;
  transition: opacity 200ms ease;
  top: 1rem;
  right: 0.5rem;

  li {
    transition: transform 150ms ease;
    transform: ${({ $visible }) =>
      $visible ? 'translateY(0%)' : 'translateY(-100%)'};
  }
`

export default LanguageSwitcherList
