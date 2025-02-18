import Navigation from "../shared/Navigation";
import IconVector from "../icons/IconVector";
import { NavLink } from "react-router-dom";
import Logo from "../shared/Logo";

export default function Header() {
  return (
    <header className="flex justify-around bg-[#f6f7ff] pt-3 pb-1 md:pb-3 md:flex-row lg:h-[5vw] md:items-center lg:justify-between">
      <Logo title="Чіп Чендж" />
      <Navigation isFooter={false} />
      <div className="flex items-center md:gap-1 lg:w-auto lg:mr-[2vw] lg:justify-between">
        <IconVector className="h-[2.1vw] md:w-[4vw] lg:h-[1.2vw] lg:w-[3vw]" />
        <NavLink
          to="#"
          onClick={() => alert("Сторінка ще не готова!")}
          className="text-[#1F1E25] cursor-pointer text-[2.5vw] md:text-[2.3vw] lg:text-[1.2vw] font-normal leading-normal"
        >
          Особистий кабінет
        </NavLink>
      </div>
    </header>
  );
}
