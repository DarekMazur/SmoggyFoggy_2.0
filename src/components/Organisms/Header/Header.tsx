'use client'

import Image from 'next/image'
import TempSwitcher from '@/assets/images/tempSwitcher.png'
import Logo from '@/components/Atoms/Logo/Logo'
import Title from '@/components/Atoms/Title/Title'
import StyledLangIcon from '@/components/Atoms/LangIcon/LangIcon.styls'
import Wrapper from '@/components/Molecules/Wrapper/Wrapper'
import StyledHeader from '@/components/Organisms/Header/Header.style'
import pl from '@/assets/icons/pl.svg'
import en from '@/assets/icons/en.svg'
import uk from '@/assets/icons/uk.svg'
import LangPicker from '@/assets/icons/langPicker.svg'
import styled from 'styled-components'
import { useState } from 'react'

const LanguageSwitcherList = styled.ul<{ $visible?: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  position: absolute;
  transition: opacity 200ms ease;
`

const Header = () => {
  const flags = [
    { icon: en, name: 'english' },
    { icon: pl, name: 'polish' },
    { icon: uk, name: 'ukrainian' },
  ]

  const [isVisible, setIsVisible] = useState(false)

  const handleShowLanguageMenu = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <StyledHeader>
      <Wrapper
        $display="flex"
        $alignItems="center"
        $justifyContent="space-between"
        $m="0 2rem"
      >
        <Image src={TempSwitcher} alt="" />
        <div>
          <StyledLangIcon
            as="button"
            type="button"
            $src={LangPicker.src}
            onClick={handleShowLanguageMenu}
          />
          <LanguageSwitcherList $visible={isVisible}>
            {flags.map((flag) => (
              <li key={flag.name}>
                <StyledLangIcon $src={flag.icon.src} />
              </li>
            ))}
          </LanguageSwitcherList>
        </div>
      </Wrapper>
      <Wrapper $display="flex" $alignItems="center">
        <Logo />
        <Title />
      </Wrapper>
    </StyledHeader>
  )
}

export default Header
