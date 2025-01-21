import pl from '@/assets/icons/pl.svg'
import en from '@/assets/icons/en.svg'
import uk from '@/assets/icons/uk.svg'
import StyledLangIcon from '@/components/Atoms/LangIcon/LangIcon.styls'
import LanguageSwitcherList from '@/components/Molecules/LanguageMenuList/LanguageMenuList.style'

const LanguageMenuList = ({ isVisible }: { isVisible?: boolean }) => {
  const flags = [
    { icon: en, name: 'english' },
    { icon: pl, name: 'polish' },
    { icon: uk, name: 'ukrainian' },
  ]

  return (
    <LanguageSwitcherList $visible={isVisible}>
      {flags.map((flag) => (
        <li key={flag.name}>
          <StyledLangIcon $src={flag.icon.src} />
        </li>
      ))}
    </LanguageSwitcherList>
  )
}

export default LanguageMenuList
