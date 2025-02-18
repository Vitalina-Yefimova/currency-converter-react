import { NavLink } from "react-router-dom";
import IconChip from "../icons/IconChip";

const Logo = ({ title, isFooter = false }) => {
  return (
    <div className="flex items-center justify-center">
      <IconChip
        className={
          isFooter
            ? "w-[2.4vw] md:w-5 lg:mt-[0.2vw]"
            : "h-[3.4vw] lg:h-[1.2vw] lg:ml-[1.5vw] lg:mt-[0.1vw]"
        }
      />
      {isFooter ? (
        <span className="font-bold text-[2.6vw] ml-1 lg:text-2xl">{title}</span>
      ) : (
        <NavLink
          className="text-[#1F1E25] font-[WorkSans] text-[3.2vw] md:text-[2vw] md:pl-1.5 lg:text-[1.3vw] lg:pl-0 font-bold leading-normal"
          to="/"
        >
          {title}
        </NavLink>
      )}
    </div>
  );
};

export default Logo;
