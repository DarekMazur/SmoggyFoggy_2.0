import styled from 'styled-components'
import LangPicker from '@/assets/icons/langPicker.svg'

const StyledLangIcon = styled.div`
  position: relative;
  margin: 0.5rem;
  border-radius: 50%;
  background: url(${LangPicker.src}) no-repeat center/cover;
  height: 3rem;
  width: 3rem;
  border: 0;
  z-index: 2;
`

export default StyledLangIcon
