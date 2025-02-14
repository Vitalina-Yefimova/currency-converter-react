import useCurrencyStore from "../../store/useCurrencyStore";

const ConversionHistory = () => {
  const { history, clearHistory } = useCurrencyStore();

  return (
    <div className="p-10 bg-[#F6F7FF] my-6 mx-101">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-[#1F1E3F]">
          Історія конвертації
        </h2>
        {history.length > 0 && (
          <button
            className="bg-[#2C36F2] text-white px-6 py-3 rounded-lg cursor-pointer"
            onClick={clearHistory}
          >
            Очистити історію
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="text-gray-500 text-center">Історія відсутня</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {history.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 rounded-lg text-sm"
            >
              <span className="text-[#C1C2CA]">{item.date}</span>
              <span className="font-semibold text-[#707C87]">
                {item.amount} {item.from} → {item.result} {item.to}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConversionHistory;
