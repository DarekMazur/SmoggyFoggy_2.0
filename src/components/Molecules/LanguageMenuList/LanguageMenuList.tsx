import pl from '@/assets/icons/pl.svg'
import en from '@/assets/icons/en.svg'
import uk from '@/assets/icons/uk.svg'
import StyledLangIcon from '@/components/Atoms/LangIcon/LangIcon.styls'
import LanguageSwitcherList from '@/components/Molecules/LanguageMenuList/LanguageMenuList.style'
import { useState, useRef, useEffect } from 'react'
import LangPicker from '@/assets/icons/langPicker.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const LanguageMenuList = () => {
  const flags = [
    { icon: pl, name: 'polish' },
    { icon: en, name: 'english' },
    { icon: uk, name: 'ukrainian' },
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
            delay: 0.3,
          }
        )
    },
    { scope: languageRef }
  )

  const handleClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as HTMLElement))
      if (tl.current) {
        tl.current.reverse()
        setIsVisible(false)
      }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const handleToggleLanguageMenu = contextSafe(() => {
    if (tl.current) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isVisible ? tl.current.reverse() : tl.current.play()
      setIsVisible((prevState) => !prevState)
    }
  })

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
            <StyledLangIcon $src={flag.icon.src} />
          </li>
        ))}
      </LanguageSwitcherList>
    </div>
  )
}

export default LanguageMenuList
