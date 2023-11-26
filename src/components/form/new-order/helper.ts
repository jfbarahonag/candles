import { CandlePackType } from "./interfaces";

function isCandlePackType(value: string): value is CandlePackType {
  return ['Desconocido', 'Pesebre', 'Doradas', 'Colores'].includes(value);
}

export {
  isCandlePackType
}