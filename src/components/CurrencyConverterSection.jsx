import '../index.css';
import SectionTemplate from './SectionTemplate';
import black_card from '../img/black_card.jpg'

export default function CurrencyConverterSection() {
  return (
    <SectionTemplate
        sectionClass="flex md:h-[554px] items-center flex-col gap-5 px-4 pb-5 md:flex-row md:justify-between"
        titleClass="text-[#1F1E25] text-center text-[4.6vw] pb-2 md:text-[40px] font-bold md:mt-[138px] md:mb-[27px]"
        subtitleClass="text-[#707C87] text-[3.5vw] text-center pb-3 md:text-[20px] font-normal"
      buttonClass="bg-[#2C36F2] text-[#F6F7FF] text-[2.6vw] h-[5.8vw] w-[30vw] mx-auto block md:text-[18px] font-medium md:h-[60px] md:w-[251px] md:mt-[27px] rounded-[4px]"
        imgClass="w-[55vw] md:w-[436px] md:h-[314px] md:mr-[251px] md:mt-[120px] md:mb-[120px]"
        title="Конвертер валют"
        subtitle="Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків."
        buttonText="Конвертувати валюту"
        imgSrc={black_card}
        imgAlt="Black card in hand"
      />
  )
}