import Navigation from "../shared/Navigation";
import SupportSection from "./SupportSection";
import iconChip from "../../assets/icons/icon_chip.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import handsetIcon from "../../assets/icons/handset.svg";
import socialIcons from "../../assets/icons/icons_social_media.svg";
import Logo from "../shared/Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-around gap-2 items-center text-center pb-10 bg-[#f6f7ff] pt-4 lg:gap-[3vw] lg:flex-row lg:text-left lg:items-start lg:px-[5vw] lg:py-[5vw]">
      <div>
        <Logo
          src={iconChip}
          alt="Icon Chip"
          title="Чіп Чендж"
          isFooter={true}
        />
        <p className="text-[#707C87] text-[2.4vw] md:text-base mt-2">
          04128, м.Київ, вул. Хрещатик, 19 <br />
          Ліцензія НБУ №156 <br />Ⓒ ПАТ ЧіпЧендж, 2019-2023
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
        isLarger={true}
      />
      <div>
        <img
          src={socialIcons}
          alt="Social Media Icons"
          className="w-[15vw] lg:w-32 lg:h-8"
        />
      </div>
    </footer>
  );
}
