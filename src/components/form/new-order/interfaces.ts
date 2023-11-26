export type CandlePackType = 'Desconocido' | 'Pesebre' | 'Doradas' | 'Colores';

export interface ICandlePack {
  id: string,
  type: CandlePackType,
  names: string[]
}
