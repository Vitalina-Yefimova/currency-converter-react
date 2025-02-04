import '../index.css';
import Navigation from './Navigation';
import icon_chip from '../img/icon_chip.svg';
import vector from '../img/vector.svg';


export default function Header() {
  return (
    <header className='flex justify-around bg-[#f6f7ff] pt-3 pb-1 md:flex-row md:h-[5vw] md:items-center md:justify-between'>
      <div className='flex justify-center items-center md:w-[147px] md:h-[23px] md:ml-[2vw]'>
        <img
          className='mr-1 h-[2.3vw] md:h-[1.2vw] md:mr-[0.5vw]'
          src={icon_chip}
          alt='Logo Chip' />
        <h3 className='text-[#1F1E25] font-[WorkSans] text-[3.2vw] md:text-[1.3vw] font-bold leading-normal'>
          Чіп Чендж
        </h3>
      </div>
      <Navigation isFooter={false} />
      <div className='flex items-center md:w-auto md:mr-[2vw] md:justify-between'>
        <img
          className='h-[2.5vw] md:h-[1.2vw] mr-1 md:mr-[0.5vw]'
          src={vector}
          alt='Icon Vector' />
        <button
          href='#'
          onClick={() => alert("Сторінка ще не готова!")}
          className='text-[#1F1E25] cursor-pointer text-[2.5vw] md:text-[1.1vw] font-normal leading-normal'
        >
          Особистий кабінет
        </button>
      </div>
    </header>
  );
}