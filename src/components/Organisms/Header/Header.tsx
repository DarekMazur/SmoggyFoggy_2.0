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

const LanguageSwitcherList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Header = () => {
  const flags = [
    { icon: en, name: 'english' },
    { icon: pl, name: 'polish' },
    { icon: uk, name: 'ukrainian' },
  ]

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
          <StyledLangIcon as="button" type="button" $src={LangPicker.src} />
          <LanguageSwitcherList>
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
