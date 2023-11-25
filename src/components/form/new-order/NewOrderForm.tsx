import {useState} from "react";

import Row from "./Row";
import CandleFields from "./CandleFields";
import BaseFields from "./BaseFields";

export default function NewOrderForm() {
  const [candles, setCandles] = useState([]);
  const [showCandleFields, setShowCandleFields] = useState(true);

  return (
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
      <Row >
        <CandleFields />
      </Row>
      {/* velas adicionales */}
      <h1>Velas adicionales</h1>
      {/* datos de bases */}
      <Row>
        <BaseFields />
      </Row>
    </form>
  );
}