import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useCurrencyStore from "../../store/useCurrencyStore";
import Arrows from "../../assets/icons/arrows.svg";
import CalendarIcon from "../../assets/icons/calendar.svg";
import CurrencyInput from "./CurrencyInput";

const schema = z.object({
  amount: z
    .string()
    .regex(
      /^\d*\.?\d{0,2}$/,
      "Число має містити не більше 2 знаків після коми"
    ),
  convertedAmount: z
    .string()
    .regex(
      /^\d*\.?\d{0,2}$/,
      "Число має містити не більше 2 знаків після коми"
    ),
});

const ConversionForm = () => {
  const { exchangeRates, fetchExchangeRates, addToHistory } =
    useCurrencyStore();
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [amount, setAmount] = useState(1000);
  const [convertedAmount, setConvertedAmount] = useState("");

  const lastEditedField = useRef("amount");

  useEffect(() => {
    fetchExchangeRates(date);
  }, [date, fetchExchangeRates]);

  useEffect(() => {
    if (exchangeRates[toCurrency] && exchangeRates[fromCurrency]) {
      const rate = exchangeRates[fromCurrency] / exchangeRates[toCurrency];

      if (lastEditedField.current === "amount") {
        const result = (Number(amount) * rate).toFixed(2);
        setConvertedAmount(result);
        setValue("convertedAmount", result);
      } else if (lastEditedField.current === "convertedAmount") {
        const result = (Number(convertedAmount) / rate).toFixed(2);
        setAmount(result);
        setValue("amount", result);
      }
    }
  }, [exchangeRates, amount, convertedAmount, fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    lastEditedField.current = "amount";
    setAmount(e.target.value);
    setValue("amount", e.target.value);
  };

  const handleConvertedAmountChange = (e) => {
    lastEditedField.current = "convertedAmount";
    setConvertedAmount(e.target.value);
    setValue("convertedAmount", e.target.value);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (
      new Date(selectedDate) >=
      new Date(new Date().setDate(new Date().getDate() - 7))
    ) {
      setDate(selectedDate);
      fetchExchangeRates(selectedDate);
    }
  };

  const onSubmit = (data) => {
    addToHistory({
      date,
      amount: data.amount,
      from: fromCurrency,
      to: toCurrency,
      result: data.convertedAmount,
    });
  };

  console.log("Передаём в CurrencyInput exchangeRates:", exchangeRates);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center bg-[#F6F7FF] p-10"
    >
      <div className="flex flex-col bg-white p-6">
        <h2 className="text-[#1F1E25] text-2xl font-bold mb-6">
          Конвертер валют
        </h2>

        <div className="flex items-center text-[#707C87] gap-4 mb-4">
          <CurrencyInput
            value={amount}
            onChange={handleAmountChange}
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            register={register("amount")}
            exchangeRates={exchangeRates}
          />
          <img className="w-6" src={Arrows} alt="Arrows icon" />
          <CurrencyInput
            value={convertedAmount}
            onChange={handleConvertedAmountChange}
            currency={toCurrency}
            setCurrency={setToCurrency}
            register={register("convertedAmount")}
            exchangeRates={exchangeRates}
          />
        </div>
        <div className="flex justify-between text-[#707C87]">
          <div className="relative mb-4">
            <input
              {...register("date")}
              id="date-input"
              type="date"
              className="absolute inset-0 opacity-0"
              value={date}
              onChange={handleDateChange}
            />
            <div className="border p-3 px-2 rounded-lg flex items-center justify-between">
              <span>{date}</span>
              <img
                src={CalendarIcon}
                className="w-5 h-5 ml-5 cursor-pointer"
                alt="Calendar icon"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#2C36F2] text-white px-4 rounded-lg cursor-pointer mb-4"
          >
            Зберегти результат
          </button>
        </div>
      </div>
    </form>
  );
};

export default ConversionForm;
