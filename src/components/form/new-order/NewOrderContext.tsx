import { createContext, useContext } from "react";
import { IBase, ICandlesPack } from "./interfaces";

export type NewOrderContext = {
  candlesPacks: ICandlesPack[]
  setCandlesPacks: (cp: ICandlesPack[]) => void,
  getCandlesPackByIdx: (idx: number) => ICandlesPack | undefined,
  getCandlesPackById: (id: string) => ICandlesPack | undefined,
  updateCandlesPackByIdx: (idx: number, newObject: ICandlesPack) => void,
  updateCandlesPackById: (newObject: ICandlesPack) => void,
  removeCandlesPackByIdx: (idx: number) => void,
  removeCandlesPackById: (id: string) => void,
  getBaseById: (id: string) => IBase | undefined,
  updateBaseById: (newObject: IBase) => void,
}

export const NewFormContext = createContext<NewOrderContext>({
  candlesPacks : [],
  setCandlesPacks: () => {},
  getCandlesPackByIdx: () => undefined,
  getCandlesPackById: () => undefined,
  updateCandlesPackByIdx: () => {},
  updateCandlesPackById: () => {},
  removeCandlesPackByIdx: () => {},
  removeCandlesPackById: () => {},
  getBaseById: () => undefined,
  updateBaseById: () => {},
});

export const useNewFormContext = () => useContext(NewFormContext);