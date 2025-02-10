import Navigation from '../shared/Navigation';
import icon_chip from '../../assets/icons/icon_chip.svg';
import vector from '../../assets/icons/vector.svg';
import { NavLink } from 'react-router-dom';
import Logo from '../shared/Logo';


export default function Header() {
  return (
    <header className='flex justify-around bg-[#f6f7ff] pt-3 pb-1 md:flex-row lg:h-[5vw] md:items-center lg:justify-between'>
      <Logo
        src={icon_chip}
        alt="Logo Chip"
        title="Чіп Чендж"
      />
      <Navigation isFooter={false} />
      <div className='flex items-center lg:w-auto lg:mr-[2vw] lg:justify-between'>
        <img
          className='h-[2.5vw] lg:h-[1.2vw] mr-1 lg:mr-[0.5vw]'
          src={vector}
          alt='Icon Vector' />
        <NavLink
          to='#'
          onClick={() => alert("Сторінка ще не готова!")}
          className='text-[#1F1E25] cursor-pointer text-[2.5vw] lg:text-[1.1vw] font-normal leading-normal'
        >
          Особистий кабінет
        </NavLink>
      </div>
    </header>
  );
}