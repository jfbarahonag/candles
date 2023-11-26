import CandlesPackNames from "./CandlesPackNames";
import CandlesPackOptions from "./CandlesPackOptions";
import { ICandlePack } from "./interfaces";

const CandlesPack = ({ candlePack }: { candlePack: ICandlePack }) => {
  return (
    <>
      <CandlesPackOptions candlePackId={candlePack.id} />
      <CandlesPackNames candlePackId={candlePack.id} />
    </>
  );
};

export default CandlesPack;
