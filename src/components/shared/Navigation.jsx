import { NavLink } from "react-router-dom";

const Navigation = ({ isFooter = false }) => {
  return (
    <nav>
      <ul
        className={`flex ${
          isFooter
            ? "flex-col gap-0.5 lg:gap-[0.5vw] text-[2.5vw] md:text-[16px] lg:mt-0"
            : "flex-col items-center pb-1 md:pt-0 md:flex-row md:gap-6 text-[2.5vw] md:text-[16px]"
        }`}
      >
        <li>
          <NavLink
            className="text-[#707c87]"
            to="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Сторінка ще не готова!");
            }}
          >
            Послуги
          </NavLink>
        </li>
        <li className="mr-0">
          <NavLink
            to="/converter"
            className={`text-${isFooter ? "[#707c87]" : "[#2c36f2]"}`}
          >
            Конвертер валют
          </NavLink>
        </li>
        <li className="mr-0">
          <NavLink
            className="text-[#707c87]"
            to="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Сторінка ще не готова!");
            }}
          >
            Контакти
          </NavLink>
        </li>
        <li className="mr-0">
          <NavLink
            className="text-[#707c87]"
            to="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Сторінка ще не готова!");
            }}
          >
            Задати питання
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
