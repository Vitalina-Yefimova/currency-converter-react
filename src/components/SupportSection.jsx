import '../index.css'

const SupportSection = ({ icon, phoneNumber, description, link}) => {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex justify-center">
      <img src={icon} alt="Support Icon" className="mr-1 w-[1.4vw]" />
        <a
          href={`tel:${link}`}
          className="text-[#1F1E25] text-[2.4vw] md:text-base hover:text-blue-500">
          {phoneNumber}
        </a>
        </div>
        <p
          className="text-[#707C87] text-[2.4vw] md:text-base">
          {description}
        </p>
    </div>
  );
};

export default SupportSection;