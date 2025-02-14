import SelectVector from "../../assets/icons/select_vector.svg";

const CurrencyInput = ({
  value,
  onChange,
  currency,
  setCurrency,
  register,
  exchangeRates,
}) => {
  return (
    <div className="relative w-full flex gap-2">
      <input
        {...register}
        type="number"
        className="border p-3 w-full rounded-lg text-center"
        value={value}
        onChange={onChange}
      />
      <div className="relative">
        <select
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
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
        <div className="px-6 pl-3 py-3 border rounded-lg flex items-center cursor-pointer">
          <span className="text-[#707C87] mr-2">{currency}</span>
          <img
            src={SelectVector}
            className="w-4 h-4 pointer-events-none"
            alt="Select Vector"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyInput;
