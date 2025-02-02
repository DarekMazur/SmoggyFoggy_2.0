'use client'

import Image from 'next/image'
import TempSwitcher from '@/assets/images/tempSwitcher.png'
import Logo from '@/components/Atoms/Logo/Logo'
import Title from '@/components/Atoms/Title/Title'
import Wrapper from '@/components/Molecules/Wrapper/Wrapper'
import StyledHeader from '@/components/Organisms/Header/Header.style'
import LanguageMenuList from '@/components/Molecules/LanguageMenuList/LanguageMenuList'
import { RootState, setMode } from '@/store'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const mode = useSelector<RootState>((state) => state.mode)
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(setMode(mode === 'light' ? 'dark' : 'light'))
  }

  return (
    <StyledHeader>
      <Wrapper
        $display="flex"
        $alignItems="center"
        $justifyContent="space-between"
        $m="0 2rem"
      >
        <Image src={TempSwitcher} alt="" onClick={handleChange} />
        <LanguageMenuList />
      </Wrapper>
      <Wrapper $display="flex" $alignItems="center">
        <Logo />
        <Title />
      </Wrapper>
    </StyledHeader>
  )
}

export default Header
