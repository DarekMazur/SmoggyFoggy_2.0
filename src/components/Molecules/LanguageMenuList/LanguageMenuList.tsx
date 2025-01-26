import pl from '@/assets/icons/pl.svg'
import en from '@/assets/icons/en.svg'
import uk from '@/assets/icons/uk.svg'
import StyledLangIcon from '@/components/Atoms/LangIcon/LangIcon.styls'
import LanguageSwitcherList from '@/components/Molecules/LanguageMenuList/LanguageMenuList.style'
import { useState, useRef, useEffect } from 'react'
import LangPicker from '@/assets/icons/langPicker.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Tooltip from '@/components/Atoms/Tooltip/Tooltip'
import i18n from 'i18next'

const LanguageMenuList = () => {
  const flags = [
    { icon: pl, short: 'pl', name: 'polish', label: 'polski' },
    { icon: en, short: 'en', name: 'english', label: 'english' },
    { icon: uk, short: 'uk', name: 'ukrainian', label: 'Українська' },
  ]

  gsap.registerPlugin(useGSAP)

  const [isVisible, setIsVisible] = useState(false)

  const languageRef = useRef<HTMLUListElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline>()

  const { contextSafe } = useGSAP(
    () => {
      if (languageRef.current)
        tl.current = gsap.timeline({ paused: true }).fromTo(
          languageRef.current.children,
          {
            autoAlpha: 0,
            x: 0,
            y: 0,
          },
          {
            autoAlpha: 1,
            y: 30,
            duration: 0.1,
            stagger: 0.05,
          }
        )
    },
    { scope: languageRef }
  )

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as HTMLElement))
      if (tl.current) {
        tl.current.reverse()
        setIsVisible(false)
      }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleToggleLanguageMenu = contextSafe(() => {
    if (tl.current) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isVisible ? tl.current.reverse() : tl.current.play()
      setIsVisible((prevState) => !prevState)
    }
  })

  const handleLanguageSwitch = (lang: string) => {
    i18n.changeLanguage(lang)
    if (tl.current) {
      tl.current.reverse()
      setIsVisible(false)
    }
  }

  return (
    <div ref={menuRef}>
      <StyledLangIcon
        as="button"
        type="button"
        $src={LangPicker.src}
        onClick={handleToggleLanguageMenu}
      />
      <LanguageSwitcherList ref={languageRef}>
        {flags.map((flag) => (
          <li key={flag.name}>
            <Tooltip direction="left" label={flag.label}>
              <StyledLangIcon
                $src={flag.icon.src}
                onClick={() => handleLanguageSwitch(flag.short)}
              />
            </Tooltip>
          </li>
        ))}
      </LanguageSwitcherList>
    </div>
  )
}

export default LanguageMenuList
