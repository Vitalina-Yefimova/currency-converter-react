import Navigation from "../shared/Navigation";
import SupportSection from "./SupportSection";
import IconPhone from "../icons/IconPhone";
import IconHandset from "../icons/IconHandset";
import IconsSocialMedia from "../icons/IconsSocialMedia";
import Logo from "../shared/Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-around gap-2 items-center text-center pb-10 bg-[#f6f7ff] pt-4 lg:gap-[3vw] lg:flex-row lg:text-left lg:items-start lg:px-[5vw] lg:py-[5vw]">
      <div className="flex flex-col items-center lg:items-start">
        <Logo title="Чіп Чендж" isFooter={true} />
        <p className="text-[#707C87] text-[2.4vw] md:text-base mt-2">
          04128, м.Київ, вул. Хрещатик, 19 <br />
          Ліцензія НБУ №156 <br />Ⓒ ПАТ ЧіпЧендж, 2019-2023
        </p>
      </div>
      <Navigation isFooter={true} />
      <SupportSection
        icon={IconPhone}
        phoneNumber="3773"
        description="Цілодобова підтримка"
        link="3773"
      />
      <SupportSection
        icon={IconHandset}
        phoneNumber="8 800 111 22 33"
        description="Безкоштовно для дзвінків в межах України"
        link="88001112233"
        isLarger={true}
      />
      <div>
        <IconsSocialMedia className="w-[15vw] md:w-[20vw] lg:w-32 lg:h-8" />
      </div>
    </footer>
  );
}
