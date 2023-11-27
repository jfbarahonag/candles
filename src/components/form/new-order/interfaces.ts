export type CandlePackType = 'Desconocido' | 'Pesebre' | 'Doradas' | 'Colores';

export interface ICandlesPack {
  id: string,
  type: CandlePackType,
  names: string[]
}
