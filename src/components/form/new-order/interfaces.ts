export type CandlePackType = 'Desconocido' | 'Pesebre' | 'Doradas' | 'Colores';

export interface ICandlesPack {
  id: string,
  type: CandlePackType,
  names: string[]
}

export interface IBase {
  id: string,
  phrase?: string
}

export interface IClient {
  name: string,
  phone: string
}
