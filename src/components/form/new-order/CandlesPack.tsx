import { useState } from "react";

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
  const { getCandlesPackById } = useNewFormContext();

  const [disableCandlesPack, setDisableCandlesPack] = useState(false);

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
        <CandlesPackNames candlePackId={candlesPack.id} />
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
