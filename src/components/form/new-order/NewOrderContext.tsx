import { createContext, useContext } from "react";
import { ICandlePack } from "./interfaces";

export type NewOrderContext = {
  candlesPacks: ICandlePack[]
  setCandlesPacks: (cp: ICandlePack[]) => void
}

export const NewFormContext = createContext<NewOrderContext>({
  candlesPacks : [],
  setCandlesPacks: () => {}
});

export const useNewFormContext = () => useContext(NewFormContext);