import SectionTemplate from "./SectionTemplate";
import mastercard_debit from "../../assets/images/mastercard_debit.png";
import background_blue from "../../assets/images/background_blue.jpg";

export default function ChipChangeSection() {
  return (
    <SectionTemplate
      sectionClass="flex flex-col items-center gap-5 py-5 mb-4 space-x-10 lg:flex-row lg:py-[5vw] lg:justify-between lg:px-[20vw] lg:gap-30 lg:mb-0"
      backgroundImage={background_blue}
      titleClass="text-[#F6F7FF] text-center text-[7vw] mt-0 lg:text-[3vw] lg:text-start font-bold mb-0"
      subtitleClass="text-[#E0E1EA] text-center lg:text-start text-[3.4vw] mt-0 pb-4 lg:pb-2 pt-2 lg:text-[1.5vw]"
      buttonClass="bg-[#F6F7FF] text-[#707C87] h-[5.8vw] w-[30vw] mt-0 mx-auto block lg:mx-0 text-[2.6vw] lg:text-[1.5vw] font-medium lg:h-[4vw] lg:w-[17.6vw] lg:mt-[29px] rounded-[4px]"
      imgClass="w-[45vw] lg:w-[24vw]"
      title="Чіп Чендж"
      subtitle="Обмінник валют - навчальний"
      buttonText="Конвертер валют"
      imgSrc={mastercard_debit}
      imgAlt="Mastercard Debit"
    />
  );
}
