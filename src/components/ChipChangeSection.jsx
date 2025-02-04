import '../index.css';
import SectionTemplate from "./SectionTemplate";
import mastercard_debit from '../img/mastercard_debit.svg'
import background_blue from '../img/background_blue.svg'

export default function ChipChangeSection() {
  return (
     <SectionTemplate
        sectionClass="flex flex-col items-center gap-5 py-5 mb-4 md:flex-row md:h-[400px] md:justify-between"
        backgroundImage={background_blue}
        titleClass="text-[#F6F7FF] text-center text-[7vw] mt-0 md:text-[54px] font-bold md:mt-[85px] mb-0 md:w-[311px] md:h-[59px]"
        subtitleClass="text-[#E0E1EA] text-center text-[3.4vw] font-bold mt-0 pb-4 pt-2 md:text-[20px] md:mt-[25px]"
        buttonClass="bg-[#F6F7FF] text-[#707C87] h-[5.8vw] w-[30vw] mt-0 mx-auto block text-[2.6vw] md:text-[18px] font-medium md:h-[53px] md:w-[234px] md:mt-[29px] rounded-[4px]"
        imgClass="w-[45vw] md:w-[341px] md:h-[216px] md:mr-[251px] md:mt-[85px] md:mb-[99px]"
        title="Чіп Чендж"
        subtitle="Обмінник валют - навчальний"
        buttonText="Конвертер валют"
        imgSrc={mastercard_debit}
        imgAlt="Mastercard Debit"
      />
  )
}