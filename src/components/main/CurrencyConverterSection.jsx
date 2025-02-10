import SectionTemplate from './SectionTemplate';
import black_card from '../../assets/images/black_card.jpg';

export default function CurrencyConverterSection() {
  return (
    <SectionTemplate
      sectionClass="flex items-center flex-col gap-5 px-4 pb-5 lg:flex-row lg:justify-start lg:py-[5vw] lg:px-[20vw] lg:gap-16"
      titleClass="text-[#1F1E25] text-center lg:text-start text-[4.6vw] pb-2 lg:text-[3vw] font-bold"
      subtitleClass="text-[#707C87] text-[3.5vw] text-center pb-3 lg:pb-8 md:text-[20px] font-normal lg:text-start"
      buttonClass="bg-[#2C36F2] text-[#F6F7FF] text-[2.6vw] h-[5.8vw] w-[30vw] mx-auto block lg:mx-0 md:text-[18px] font-medium md:h-[60px] lg:w-[16vw] rounded-[4px]"
      imgClass="w-[55vw]"
      title="Конвертер валют"
      subtitle="Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків."
      buttonText="Конвертувати валюту"
      imgSrc={black_card}
      imgAlt="Black card in hand"
      />
  )
}