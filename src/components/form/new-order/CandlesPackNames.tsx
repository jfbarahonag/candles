import { useState } from "react";
import { useNewFormContext } from "./NewOrderContext";
import CandlesPackNameFields from "./CandlesPackNameFields";

const CandlesPackNames = ({ candlePackId }: { candlePackId: string }) => {
  const { getCandlesPackById } = useNewFormContext();
  
  const [currentCandlesPack, setCurrentCandlesPack] = useState(
    getCandlesPackById(candlePackId)
  );

  if (!currentCandlesPack) {
    return <h1>NOT FOUND</h1>
  }
  
  return (
    <ul className="px-3 w-full">
      {
        (currentCandlesPack.type === 'Colores' || currentCandlesPack.type === 'Doradas') &&
        currentCandlesPack.names.map((name, idx) => (
          <CandlesPackNameFields 
            key={`${idx}-${name}`} 
            candlesPack={currentCandlesPack} 
            fieldIdx={idx} 
          />
        ))
      }
    </ul>
  )
}

export default CandlesPackNames