'use client'

import Image from 'next/image'
import TempSwitcher from '@/assets/images/tempSwitcher.png'
import Logo from '@/components/Atoms/Logo/Logo'
import Title from '@/components/Atoms/Title/Title'
import StyledLangIcon from '@/components/Atoms/LangIcon/LangIcon.styls'
import Wrapper from '@/components/Molecules/Wrapper/Wrapper'
import StyledHeader from '@/components/Organisms/Header/Header.style'
import LangPicker from '@/assets/icons/langPicker.svg'
import { useState } from 'react'
import LanguageMenuList from '@/components/Molecules/LanguageMenuList/LanguageMenuList'

const Header = () => {
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
          <LanguageMenuList isVisible={isVisible} />
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
