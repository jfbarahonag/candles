import { useState, useEffect } from "react";
import { useNewFormContext } from "./NewOrderContext";
import CandlesPackNameFields from "./CandlesPackNameFields";

const CandlesPackNames = ({
  candlePackId,
  updateName,
}: {
  candlePackId: string;
  updateName: (id: string, idx: number, value: string) => void;
}) => {
  const { candlesPacks, getCandlesPackById } = useNewFormContext();

  const [localNames, setlocalNames] = useState(structuredClone(
    getCandlesPackById(candlePackId)?.names || [])
  );
  const [currentCandlesPack, setCurrentCandlesPack] = useState(
    getCandlesPackById(candlePackId)
  );

  const changeNameOfCandlesPack = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [id, idxStr] = e.target.id.split(" - ");
    const idx = Number(idxStr);
    if (isNaN(idx)) return;
    updateName(id, idx, e.target.value);
    setlocalNames(prev => [
      ...prev.slice(0, idx),
      e.target.value,
      ...prev.slice(idx + 1),
    ]);
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
          <div className="flex" key={`${name}-${idx}`}>
            <div className="w-1/12 flex flex-col justify-center">
              <span>{idx + 1}.</span>
            </div>
            <input
              value={localNames[idx]}
              id={`${currentCandlesPack.id} - ${idx}`}
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
