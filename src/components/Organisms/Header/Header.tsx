'use client'

import Image from 'next/image'
import Logo from '@/assets/icons/logoLight.svg'
import TempSwitcher from '@/assets/images/tempSwitcher.png'
import LangPicker from '@/assets/icons/langPicker.svg'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 1rem 1rem;
`

export const StyledLogo = styled(Image)`
  height: 5rem;
  width: 5rem;
  margin-top: 6rem;
  margin-right: 1.5rem;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header};
  margin: 6rem 0 0;
  font-size: 4rem;
`

export const StyledLangIcon = styled.div`
  position: relative;
  margin: 0.5rem;
  border-radius: 50%;
  background: url(${LangPicker.src}) no-repeat center/cover;
  height: 3rem;
  width: 3rem;
  border: 0;
  z-index: 2;
`

interface IWrapperProps {
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

export const StyledWrapper = styled.div<IWrapperProps>`
  position: ${({ $position }) => $position || 'static'};
  margin: ${({ $m }) => $m || 0};
  padding: ${({ $p }) => $p || 0};
  display: ${({ $display }) => $display || 'initial'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'unset'};
  align-items: ${({ $alignItems }) => $alignItems || 'unset'};
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledWrapper
        $display="flex"
        $alignItems="center"
        $justifyContent="space-between"
        $m="0 2rem"
      >
        <Image src={TempSwitcher} alt="" />
        <StyledLangIcon />
      </StyledWrapper>
      <StyledWrapper $display="flex" $alignItems="center">
        <StyledLogo src={Logo} alt="" />
        <Title>Smoggy Foggy</Title>
      </StyledWrapper>
    </StyledHeader>
  )
}

export default Header
