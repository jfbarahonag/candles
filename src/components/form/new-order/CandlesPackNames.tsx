import { useState, useEffect } from "react";
import { useNewFormContext } from "./NewOrderContext";
import CandlesPackNameFields from "./CandlesPackNameFields";

const CandlesPackNames = ({
  candlePackId,
}: {
  candlePackId: string;
}) => {
  const { candlesPacks, getCandlesPackById, updateCandlesPackById } = useNewFormContext();

  
  const [currentCandlesPack, setCurrentCandlesPack] = useState(
    getCandlesPackById(candlePackId)
  );

  const changeNameOfCandlesPack = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(candlePackId, e.currentTarget.id, e.currentTarget.value);
    
    const currentCandlesPack = getCandlesPackById(candlePackId);

    if (!currentCandlesPack) return;

    const idxName = Number(e.currentTarget.id);
    
    if (isNaN(idxName)) return;
    
    currentCandlesPack.names[idxName] = e.currentTarget.value;
    
    updateCandlesPackById(currentCandlesPack);
  };

  useEffect(() => {
    console.log("se actualizo candles packs")
    setCurrentCandlesPack(
      getCandlesPackById(candlePackId)
    );
  }, [candlesPacks])
  

  if (!currentCandlesPack) {
    return <h1>NOT FOUND</h1>;
  }

  return (
    <ul className="px-3 w-full">
      {(currentCandlesPack.type === "Colores" ||
        currentCandlesPack.type === "Doradas") &&
        currentCandlesPack.names.map((name, idx) => (
          <div className="flex" key={`${candlePackId}-${idx}`}>
            <div className="w-1/12 flex flex-col justify-center">
              <span>{idx + 1}.</span>
            </div>
            <input
              value={currentCandlesPack.names[idx]}
              id={`${idx}`}
              className="w-10/12 my-2 p-1"
              type="text"
              placeholder="Nombre de la vela"
              onChange={changeNameOfCandlesPack}
            />
          </div>
        ))}
    </ul>
  );
};

export default CandlesPackNames;
