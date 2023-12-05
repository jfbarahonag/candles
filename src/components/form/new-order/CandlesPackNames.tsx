import { useState, useEffect } from "react";
import { useNewFormContext } from "./NewOrderContext";
import CandlesPackNameFields from "./CandlesPackNameFields";

const CandlesPackNames = ({ candlePackId }: { candlePackId: string }) => {
  const { candlesPacks, getCandlesPackById } =
    useNewFormContext();

  const [currentCandlesPack, setCurrentCandlesPack] = useState(
    getCandlesPackById(candlePackId)
  );

  useEffect(() => {
    setCurrentCandlesPack(getCandlesPackById(candlePackId));
  }, [candlesPacks]);

  if (!currentCandlesPack) {
    return <h1>NOT FOUND</h1>;
  }

  return (
    <ul className="px-3 w-full">
      {(currentCandlesPack.type === "Colores" ||
        currentCandlesPack.type === "Doradas") &&
        currentCandlesPack.names.map((_, idx) => (
          <CandlesPackNameFields key={`${candlePackId}-${idx}`}
            candlesPack={currentCandlesPack}
            fieldIdx={idx}
           />
        ))}
    </ul>
  );
};

export default CandlesPackNames;
