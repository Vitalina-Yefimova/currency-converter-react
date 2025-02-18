const SupportSection = ({
  icon: Icon,
  phoneNumber,
  description,
  link,
  isLarger = false,
}) => {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex justify-center lg:justify-start">
        <Icon
          className={`mr-1 w-[1.2vw] h-[2.7vw] lg:w-[0.9vw] lg:h-[2vw] lg:mr-[0.7vw]${
            isLarger
              ? "mr- w-[2vw] h-[3.7vw] md:h-[3.5vw] lg:w-[1.4vw] lg:h-[1.5vw] lg:mt-[0.3vw] lg:mr-[0.4vw]"
              : ""
          }`}
        />
        <a
          href={`tel:${link}`}
          className="text-[#1F1E25] text-[2.4vw] md:text-base hover:text-blue-500 lg:ml-1"
        >
          {phoneNumber}
        </a>
      </div>
      <p
        className="text-[#707C87] text-[2.4vw] md:text-base lg:pl-[2vw] cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          alert("Сторінка ще не готова!");
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default SupportSection;
