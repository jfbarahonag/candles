import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ICandlesPack } from "./interfaces";

import Row from "./Row";

import CandlesPack from "./CandlesPack";
import { NewFormContext } from "./NewOrderContext";

export default function NewOrderForm() {
  const [candlesPacks, setCandlesPacks] = useState<ICandlesPack[]>([]);

  const addCandlePack = () => {
    const newCandlePack: ICandlesPack = {
      id: uuidv4(),
      type: "Desconocido",
      names: ["", "", "", "", "", "", "", "", "", ""], //10 names
    };

    setCandlesPacks([newCandlePack, ...candlesPacks]);
  };

  const getCandlesPackByIdx = (idx: number) => {
    return candlesPacks.at(idx);
  };

  const getCandlesPackById = (id: string) => {
    return candlesPacks.find(cp => cp.id === id);
  };

  const updateCandlesPackByIdx = (idx: number, newObject: ICandlesPack) => {
    if (idx < 0 || idx > candlesPacks.length) return;

    setCandlesPacks((prev) => [
      ...prev.slice(0, idx),
      newObject,
      ...prev.slice(idx + 1),
    ]);
  };

  const updateCandlesPackById = (newObject: ICandlesPack) => {
    setCandlesPacks((prev) =>
      prev.map((cp) => (cp.id === newObject.id ? newObject : cp))
    );
  };

  const removeCandlesPackByIdx = (idx: number) => {
    setCandlesPacks((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
  };

  const removeCandlesPackById = (id: string) => {
    setCandlesPacks(candlesPacks.filter((cp) => cp.id !== id));
  };

  return (
    <NewFormContext.Provider
      value={{
        candlesPacks,
        setCandlesPacks,
        getCandlesPackByIdx,
        getCandlesPackById,
        updateCandlesPackByIdx,
        updateCandlesPackById,
        removeCandlesPackByIdx,
        removeCandlesPackById,
      }}
    >
      <form className="w-full max-w-lg py-4">
        {/* datos de comprador */}
        <Row>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-full-name"
            >
              Nombre completo
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-full-name"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-phone-number"
            >
              Número de celular
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phone-number"
              type="tel"
              placeholder="XXXXXXXXXX"
            />
          </div>
        </Row>
        {/* datos de velas */}
        <Row>
          <div className="px-3 w-full flex flex-col">
            <button
              className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={addCandlePack}
              type="button"
            >
              Agregar paquete de velas
            </button>
          </div>
          {candlesPacks.length > 0 &&
            candlesPacks.map((cp) => (
              <CandlesPack key={cp.id} candlePack={cp} />
            ))}
        </Row>
      </form>
    </NewFormContext.Provider>
  );
}
