import { NavLink } from "react-router-dom";

const SectionTemplate = ({
  sectionClass,
  backgroundImage,
  titleClass,
  subtitleClass,
  buttonClass,
  imgClass,
  title,
  subtitle,
  buttonText,
  imgSrc,
  imgAlt,
}) => {
  return (
    <section
      className={sectionClass}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mr-0">
        <h1 className={titleClass}>{title}</h1>
        <p className={subtitleClass}>{subtitle}</p>
        <NavLink to="/converter">
          <button className={`${buttonClass} cursor-pointer`}>
            {buttonText}
          </button>
        </NavLink>
      </div>
      <img className={imgClass} src={imgSrc} alt={imgAlt} />
    </section>
  );
};

export default SectionTemplate;
