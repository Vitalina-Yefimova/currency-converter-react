import '../index.css'


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
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: 'no-repeat' }} >
      <div className="md:ml-[250px]">
        <h1
          className={titleClass}>{title}
        </h1>
        <p
          className={subtitleClass}>{subtitle}
        </p>
        <button
          className={buttonClass}>{buttonText}
        </button>
      </div>
      <img
        className={imgClass}
        src={imgSrc}
        alt={imgAlt} />
    </section>
  );
};

export default SectionTemplate;