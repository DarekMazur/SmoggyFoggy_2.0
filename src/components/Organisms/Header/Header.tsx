import Image from 'next/image'
import Logo from '@/assets/icons/logoLight.svg'
import TempSwitcher from '@/assets/images/tempSwitcher.png'
import LangPicker from '@/assets/icons/langPicker.svg'

const Header = () => {
  return (
    <header>
      <div>
        <Image src={TempSwitcher} alt="" />
        <Image src={LangPicker} alt="Pick language" />
      </div>
      <div>
        <Image src={Logo} alt="" />
        <h1>Smoggy Foggy</h1>
      </div>
    </header>
  )
}

export default Header
