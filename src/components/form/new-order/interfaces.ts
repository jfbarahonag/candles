type CandlePackType = 'Desconocido' | 'Pesebre' | 'Doradas' | 'Colores';

interface ICandlePack {
  id: string,
  type: CandlePackType,
  names: string[]
}
