import { NavLink } from 'react-router-dom';

const Logo = ({ src, alt, title, isFooter = false }) => {
  return (
    <div className={`flex ${isFooter ? 'items-center justify-center md:justify-start' : 'justify-center items-center lg:ml-[2vw]'}`}>
      <img
        className={isFooter ? 'w-[2.2vw] md:w-5' : 'mr-1 h-[2.3vw] lg:h-[1.2vw] lg:mr-[0.5vw]'}
        src={src}
        alt={alt}
      />
      {isFooter ? (
        <span className="font-bold text-[2.6vw] ml-1 md:text-2xl md:ml-2">{title}</span>
      ) : (
        <NavLink
          className='text-[#1F1E25] font-[WorkSans] text-[3.2vw] lg:text-[1.2vw] font-bold leading-normal'
          to="/"
        >
          {title}
        </NavLink>
      )}
    </div>
  );
};

export default Logo;