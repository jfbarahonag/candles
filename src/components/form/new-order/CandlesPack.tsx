import CandleFields from "./CandleFields";
import { ICandlePack } from "./interfaces";

const CandlesPack = ({ candlePack }: { candlePack: ICandlePack }) => {
  return (
    <>
      <CandleFields />
    </>
  );
};

export default CandlesPack;
