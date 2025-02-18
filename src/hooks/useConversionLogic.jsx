import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useCurrencyStore from "../store/useCurrencyStore"; // Хук управления глобальным состоянием (Zustand)

const amountSchema = z
  .string()
  .regex(/^\d*\.?\d{0,2}$/, "Число має містити не більше 2 знаків після коми");

const schema = z.object({
  amount: amountSchema,
  convertedAmount: amountSchema,
});

const useConversionLogic = () => {
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

  const lastEditedField = useRef("amount"); // Для отслеживания последнего редактируемого поля

  useEffect(() => {
    fetchExchangeRates(date); // Запрос API с новыми курсами валют
  }, [date, fetchExchangeRates]); // Выполняется при изменении "date"

  // Автоматический пересчёт валюты при изменении курса или значений
  useEffect(() => {
    if (exchangeRates[toCurrency] && exchangeRates[fromCurrency]) {
      const rate = exchangeRates[fromCurrency] / exchangeRates[toCurrency]; // Вычисление курса обмена

      if (lastEditedField.current === "amount") {
        const result = (Number(amount) * rate).toFixed(2);
        setConvertedAmount(result);
        setValue("convertedAmount", result);
      } else {
        const result = (Number(convertedAmount) / rate).toFixed(2);
        setAmount(result);
        setValue("amount", result);
      }
    }
  }, [exchangeRates, amount, convertedAmount, fromCurrency, toCurrency]);

  const handleInputChange = (e, field) => {
    lastEditedField.current = field;
    const newValue = e.target.value;
    setValue(field, newValue);

    if (field === "amount") {
      setAmount(newValue);
    } else {
      setConvertedAmount(newValue);
    }
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

  return {
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
  };
};

export default useConversionLogic;
