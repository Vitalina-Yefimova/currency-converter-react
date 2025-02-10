const SupportSection = ({ icon, phoneNumber, description, link, isLarger = false}) => {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex justify-center lg:justify-start">
      <img src={icon} alt="Support Icon" className={`mr-1 w-[1.4vw] lg:w-[0.5vw] ${isLarger ? 'w-[1.7vw] lg:w-[0.8vw]' : ''}`} />
        <a
          href={`tel:${link}`}
          className="text-[#1F1E25] text-[2.4vw] md:text-base hover:text-blue-500">
          {phoneNumber}
        </a>
        </div>
        <p
        className="text-[#707C87] text-[2.4vw] md:text-base lg:pl-[0.8vw] cursor-pointer"
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