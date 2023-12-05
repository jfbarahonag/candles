import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ICandlesPack, IBase, IClient } from "./interfaces";

import Row from "./Row";

import CandlesPack from "./CandlesPack";
import { NewFormContext } from "./NewOrderContext";
import Base from "./Base";

export default function NewOrderForm() {
  const [candlesPacks, setCandlesPacks] = useState<ICandlesPack[]>([]);
  const [bases, setBases] = useState<IBase[]>([]);
  const [client, setClient] = useState<IClient>({
    name: "",
    phone: "",
  });
  /* ------------------------------------------------------------------------- */
  const updateClientName = (name: string) => {
    setClient((c) => ({ ...c, name }));
  };

  const updateClientPhone = (phone: string) => {
    setClient((c) => ({ ...c, phone }));
  };
  /* ------------------------------------------------------------------------- */
  const addCandlePack = () => {
    const newCandlePack: ICandlesPack = {
      id: uuidv4(),
      type: "Desconocido",
      names: ["", "", "", "", "", "", "", "", "", ""], //10 names
    };

    setCandlesPacks([newCandlePack, ...candlesPacks]);
  };

  const getCandlesPackByIdx = (idx: number) => {
    return structuredClone(candlesPacks.at(idx));
  };

  const getCandlesPackById = (id: string) => {
    return structuredClone(candlesPacks.find((cp) => cp.id === id));
  };

  const updateCandlesPackByIdx = (idx: number, newObject: ICandlesPack) => {
    if (idx < 0 || idx > candlesPacks.length) return;

    setCandlesPacks((prev) => [
      ...prev.slice(0, idx),
      structuredClone(newObject),
      ...prev.slice(idx + 1),
    ]);
  };

  const updateCandlesPackById = (newObject: ICandlesPack) => {
    setCandlesPacks((prev) =>
      prev.map((cp) =>
        cp.id === newObject.id ? structuredClone(newObject) : cp
      )
    );
  };

  const removeCandlesPackByIdx = (idx: number) => {
    setCandlesPacks((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
  };

  const removeCandlesPackById = (id: string) => {
    setCandlesPacks(candlesPacks.filter((cp) => cp.id !== id));
  };
  /* ------------------------------------------------------------------------- */
  const addBase = () => {
    const newBase: IBase = {
      id: uuidv4(),
      phrase: "",
    };

    setBases([newBase, ...bases]);
  };

  const getBaseById = (id: string) => {
    return structuredClone(bases.find((cp) => cp.id === id));
  };

  const updateBaseById = (newObject: IBase) => {
    setBases((prev) =>
      prev.map((b) => (b.id === newObject.id ? structuredClone(newObject) : b))
    );
  };
  /* ------------------------------------------------------------------------- */
  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (candlesPacks.length === 0 && bases.length === 0) {
      console.log("Nada para enviar");
      return;
    }
    if (candlesPacks.some((cp) => cp.type === "Desconocido")) {
      alert("No puede haber Paquetes de velas de tipo Desconocido");
      return;
    }
    const data = {
      client,
      candlesPacks,
      bases,
    };
    console.log(JSON.stringify(data));
    //TODO: Connect to API
    setCandlesPacks([]);
    setBases([]);
    setClient({ name: "", phone: "" });
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
        getBaseById,
        updateBaseById,
      }}
    >
      <form className="w-full max-w-lg py-4" onSubmit={onSubmit}>
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
              value={client.name}
              className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-full-name"
              type="text"
              placeholder="Jane"
              required
              onChange={(e) => updateClientName(e.currentTarget.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-phone-number"
            >
              Número de celular
            </label>
            <input
              value={client.phone}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phone-number"
              type="tel"
              placeholder="XXXXXXXXXX"
              onChange={(e) => updateClientPhone(e.currentTarget.value)}
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
              <CandlesPack key={cp.id} candlesPack={cp} />
            ))}
        </Row>
        {/* datos de bases */}
        <Row>
          <div className="px-3 w-full flex flex-col">
            <button
              className="mb-2 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={addBase}
              type="button"
            >
              Agregar base
            </button>
          </div>
          {bases.length > 0 && bases.map((b) => <Base key={b.id} base={b} />)}
        </Row>
        {/* enviar */}
        <Row>
          <div className="px-3 w-full flex flex-col">
            <button
              type="submit"
              className="mb-2 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Enviar
            </button>
          </div>
        </Row>
      </form>
    </NewFormContext.Provider>
  );
}
