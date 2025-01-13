import styled from 'styled-components'

export interface IStyledWrapperProps {
  $position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
  $m?: string | number
  $p?: string | number
  $display?:
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | 'flow-root'
  $justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
  $alignItems?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'anchor-center'
}

const StyledWrapper = styled.div<IStyledWrapperProps>`
  position: ${({ $position }) => $position || 'static'};
  margin: ${({ $m }) => $m || 0};
  padding: ${({ $p }) => $p || 0};
  display: ${({ $display }) => $display || 'initial'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'unset'};
  align-items: ${({ $alignItems }) => $alignItems || 'unset'};
`

export default StyledWrapper
