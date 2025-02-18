import useConversionLogic from "../../hooks/useConversionLogic";
import IconArrows from "../icons/IconArrows";
import IconCalendar from "../icons/IconCalendar";
import CurrencyInput from "./CurrencyInput";
import Button from "../shared/Button";

const ConversionForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    amount,
    convertedAmount,
    fromCurrency,
    toCurrency,
    date,
    setFromCurrency,
    setToCurrency,
    exchangeRates,
    handleInputChange,
    handleDateChange,
  } = useConversionLogic();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:justify-center bg-[#F6F7FF] p-10 lg:px-[15vw]"
    >
      <div className="flex flex-col bg-white p-6">
        <h2 className="text-[#1F1E25] text-[3vw] text-center lg:text-left lg:text-2xl font-bold pb-3 lg:mb-6">
          Конвертер валют
        </h2>
        <div className="flex flex-col items-center lg:flex-row text-[#707C87] gap-1 md:gap-3 lg:items-start lg:gap-4 mb-4">
          <CurrencyInput
            value={amount}
            onChange={(e) => handleInputChange(e, "amount")}
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            register={register("amount")}
            exchangeRates={exchangeRates}
          />
          <IconArrows className="w-2 md:w-5 lg:w-[5vw] lg:h-[2vw] lg:mt-[1vw] lg:mr-[0.5vw]" />
          <CurrencyInput
            value={convertedAmount}
            onChange={(e) => handleInputChange(e, "convertedAmount")}
            currency={toCurrency}
            setCurrency={setToCurrency}
            register={register("convertedAmount")}
            exchangeRates={exchangeRates}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between text-[#707C87] mt-2">
          <div className="relative mb-4">
            <input
              {...register("date")}
              id="date-input"
              type="date"
              className="absolute inset-0 opacity-0"
              value={date}
              onChange={handleDateChange}
            />
            <div className="border w-[40vw] h-[8vw] lg:p-3 lg:px-2 rounded-lg flex items-center justify-between lg:w-[18vw] lg:h-[4vw]">
              <span className="text-[2.5vw] lg:text-[1.7vw] pl-[5vw] lg:pl-[1vw] lg:items-start">
                {date}
              </span>
              <IconCalendar className="w-[5vw] h-[4vw] mr-1.5 cursor-pointer lg:w-[2vw]" />
            </div>
          </div>
          <Button
            type="submit"
            className="bg-[#2C36F2] text-white px-[2vw] py-[1.3vw] text-[3vw] lg:px-4 lg:py-[1vw] lg:rounded-[4px] lg:mb-5 lg:h-[4vw] lg:w-[17.6vw] lg:text-[1.5vw]"
          >
            Зберегти результат
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ConversionForm;
