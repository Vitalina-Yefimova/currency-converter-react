import useCurrencyStore from "../../store/useCurrencyStore";
import Button from "../shared/Button";
import IconVectorHistory from "../icons/IconVectorHistory";

const ConversionHistory = () => {
  const { history, clearHistory } = useCurrencyStore();

  return (
    <div className="p-5 mb-0 lg:p-10 bg-[#F6F7FF] lg:my-6 my-0 lg:px-[16vw]">
      <div className="flex justify-between items-center gap-10 lg:gap-1 mb-5">
        <h2 className="text-[3vw] mx-auto lg:ml-2 lg:text-2xl font-bold text-[#1F1E3F]">
          Історія конвертації
        </h2>
        {history.length > 0 && (
          <Button
            className="bg-[#2C36F2] text-white text-[3vw] px-2 py-1 rounded-lg lg:py-[1vw] lg:rounded-[4px] lg:mb-5 lg:mr-[1vw] lg:h-[4vw] lg:w-[16vw] lg:text-[1.5vw]"
            onClick={clearHistory}
          >
            Очистити історію
          </Button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="text-gray-500 text-center text-[3vw] lg:text-[2vw]">
          Історія відсутня
        </p>
      ) : (
        <div className="grid gap-1 lg:grid-cols-2 lg:gap-4 lg:px-2">
          {history.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-1 lg:p-4 rounded-lg text-[2vw] lg:text-sm"
            >
              <span className="text-[#C1C2CA]">{item.date}</span>
              <span className="font-semibold text-[#707C87]">
                {item.amount} {item.from}
              </span>
              <IconVectorHistory className="w-[2.5vw]" />
              <span className="font-semibold text-[#707C87]">
                {item.result} {item.to}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConversionHistory;
