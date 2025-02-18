import IconSelectVector from "../icons/IconSelectVector";

const CurrencyInput = ({
  value,
  onChange,
  currency,
  setCurrency,
  register,
  exchangeRates,
}) => {
  return (
    <div className="relative w-[40vw] h-[7vw] md:h-[6.9vw] lg:w-full flex gap-2">
      <input
        {...register}
        type="number"
        className="border p-3 w-full lg:w-[18vw] lg:h-[4vw] rounded-lg text-center text-[2.5vw] lg:text-[1.8vw]"
        value={value}
        onChange={onChange}
      />
      <div className="relative">
        <select
          className="absolute top-0 left-0 lg:w-full lg:h-full opacity-0 cursor-pointer"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {exchangeRates &&
            Object.keys(exchangeRates).map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
        </select>
        <div className="px-4 lg:px-6 pl-3 py-[1.7vw] mt-[0.1vw] md:py-[1.44vw] lg:py-3 border rounded-lg flex items-center cursor-pointer md:m-0 lg:w-[10vw] lg:h-[4vw] lg:pr-0">
          <span className="text-[#707C87] text-[2.5vw] lg:text-[1.8vw] mr-2">
            {currency}
          </span>
          <IconSelectVector className="w-[2vw] h-[2vw] lg:w-[30vw] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default CurrencyInput;
