import { useState, useEffect } from "react";

import CandlesPackNames from "./CandlesPackNames";
import CandlesPackOptions from "./CandlesPackOptions";
import { ICandlesPack } from "./interfaces";
import { useNewFormContext } from "./NewOrderContext";

const getColorButton = (disabled: boolean): string => {
  return `${
    disabled
      ? "bg-orange-500 hover:bg-orange-700"
      : "bg-green-500 hover:bg-green-700"
  }`;
};

const getTextButton = (disabled: boolean): string => {
  return `${disabled ? "Editar" : "Guardar"}`;
};

const CandlesPack = ({ candlesPack }: { candlesPack: ICandlesPack }) => {
  const { candlesPacks, getCandlesPackById } = useNewFormContext();

  const [candlesPacksCopy, setCandlesPacksCopy] = useState(structuredClone(candlesPacks));

  const [disableCandlesPack, setDisableCandlesPack] = useState(false);

  const updateName = (id: string, idx: number, value: string) => {
    const cp = structuredClone(
      candlesPacksCopy.find(cp => cp.id === id)
    );
    if (!cp) return;
    console.log("valid cp")
    cp.names[idx] = value;

    setCandlesPacksCopy((prev) =>
      prev.map(
        (cpc) => (cpc.id === cp.id ? structuredClone(cp) : structuredClone(cpc))
      )
    );
    console.log("first")
  }

  useEffect(() => {
    console.log(candlesPacksCopy)
  }, [candlesPacksCopy])

  useEffect(() => {
    setCandlesPacksCopy( prevCpc => {
        if (candlesPacks.length === prevCpc.length + 1) {
          // new item
          return structuredClone([candlesPacks[0], ...prevCpc])
        } else if (candlesPacks.length < prevCpc.length) {
          // remove item
          return structuredClone(
            prevCpc.filter(obj1 => candlesPacks.find(obj2 => obj2.id === obj1.id))
          );
        }
        // update item
        return candlesPacks.map(cp => cp);
      }
    );
  }, [candlesPacks])
  

  const saveCandlesPack = () => {
    if (!disableCandlesPack) {
      //is going to save
      const currentCandlesPack = getCandlesPackById(candlesPack.id);
      const a = document.getElementById(`${currentCandlesPack?.id}-${1}`)?.id
      console.log(a)
      alert(JSON.stringify(currentCandlesPack));

    }

    setDisableCandlesPack(!disableCandlesPack);
  };

  return (
    <>
      <fieldset className="flex flex-col w-full" disabled={disableCandlesPack}>
        <CandlesPackOptions candlePackId={candlesPack.id} />
        <CandlesPackNames candlePackId={candlesPack.id} updateName={updateName} />
      </fieldset>
      {candlesPack.type !== "Desconocido" && (
        <div className="my-3 px-3 w-full flex flex-row justify-center">
          <button
            className={`mb-2 text-white font-bold py-2 px-4 rounded-full ${getColorButton(
              disableCandlesPack
            )}`}
            type="button"
            onClick={saveCandlesPack}
          >
            {getTextButton(disableCandlesPack)}
          </button>
        </div>
      )}
    </>
  );
};

export default CandlesPack;
