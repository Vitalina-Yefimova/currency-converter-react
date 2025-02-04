import '../index.css'
import Navigation from './Navigation'
import SupportSection from './SupportSection'
import iconChip from '../img/icon_chip.svg'
import phoneIcon from '../img/phone.svg'
import handsetIcon from '../img/handset.svg'

import socialIcons from '../img/icons_social_media.svg'


export default function Footer() {
  return (
    <footer className="flex flex-col justify-around items-center text-center pb-10 bg-[#f6f7ff] pt-4 gap-3 md:flex-row md:text-left md:items-start md:px-16">
      <div>
        <div className="flex items-center justify-center md:justify-start">
          <img
            src={iconChip}
            alt="Icon Chip"
            className="w-[2.2vw] md:w-5" />
          <span className="font-bold text-[2.6vw] ml-1 md:text-2xl md:ml-2">Чіп Чендж</span>
        </div>
        <p className="text-[#707C87] text-[2.4vw] md:text-base mt-2">
          04128, м.Київ, вул. Хрещатик, 19 <br />
          Ліцензія НБУ №156 <br />
          Ⓒ ПАТ ЧіпЧендж, 2019-2023
        </p>
      </div>
      <Navigation isFooter={true} />
      <SupportSection
        icon={phoneIcon}
        phoneNumber="3773"
        description="Цілодобова підтримка"
        link="3773"
        />

        <SupportSection 
          icon={handsetIcon} 
          phoneNumber="8 800 111 22 33" 
          description="Безкоштовно для дзвінків в межах України"
          link="88001112233"
        />
      <div>
        <img src={socialIcons} alt="Social Media Icons" className="w-[15vw] md:w-32 md:h-8" />
      </div>
    </footer>
  )
}