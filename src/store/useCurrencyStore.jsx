import { create } from "zustand";
import { persist } from "zustand/middleware"; // persist - сохраняет данные в localStorage, чтобы они не терялись при перезагрузке

const useCurrencyStore = create(
  persist(
    (set) => ({
      exchangeRates: {}, // массив с курсами валют
      history: JSON.parse(localStorage.getItem("currency-history")) || [], // загрузка истории из localStorage
      fetchExchangeRates: async (
        date = new Date().toISOString().split("T")[0]
      ) => {
        try {
          const response = await fetch(
            `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date.replace(
              /-/g,
              ""
            )}&json`
          );
          const data = await response.json();
          const rates = { UAH: 1 };
          data.forEach(({ cc, rate }) => {
            rates[cc] = rate;
          });
          set({ exchangeRates: rates });
        } catch (error) {
          console.error("Error fetching exchange rates:", error);
        }
      },
      addToHistory: (conversion) =>
        set((state) => {
          const newHistory = [conversion, ...state.history].slice(0, 10);
          return { history: newHistory };
        }),
      clearHistory: () => {
        set({ history: [] });
        localStorage.removeItem("currency-history"); // Очищает историю из localStorage
      },
    }),
    {
      name: "currency-history", // имя ключа для сохранения в localStorage
      getStorage: () => localStorage, // Указывает, что данные должны сохраняться в localStorage
    }
  )
);

export default useCurrencyStore;
