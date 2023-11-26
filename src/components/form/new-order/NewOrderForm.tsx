import { useState } from "react";
import {v4 as uuidv4} from "uuid";

import { ICandlePack } from "./interfaces";

import Row from "./Row";

import CandlesPack from "./CandlesPack";
import { NewFormContext } from "./NewOrderContext";

export default function NewOrderForm() {
  const [candlesPacks, setCandlesPacks] = useState<ICandlePack[]>([]);
  const [showCandleFields, setShowCandleFields] = useState(true);

  const addCandlePack = () => {
    const newCandlePack: ICandlePack = {
      id: uuidv4(),
      type: 'Desconocido',
      names: []
    };

    setCandlesPacks([...candlesPacks, newCandlePack]);
  }

  return (
    <NewFormContext.Provider value={{candlesPacks, setCandlesPacks}}>
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
          <div className="w-full flex flex-col gap-y-2">
            <button 
              className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={addCandlePack}
              type="button"
            >
              Agregar paquete de velas
            </button>
          </div>
          {
            candlesPacks.length > 0 && (
              candlesPacks.map(cp => (
                <CandlesPack key={cp.id} candlePack={cp} />
              ))
            )
          }
        </Row>
      </form>
    </NewFormContext.Provider>
  );
}
