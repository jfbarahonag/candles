import { useState } from "react";
import { useNewFormContext } from "./NewOrderContext";

const CandlesPackNames = ({ candlePackId }: { candlePackId: string }) => {
  const { candlesPacks, setCandlesPacks } = useNewFormContext();
  
  const [currentCandlesPack, setCurrentCandlesPack] = useState(
    candlesPacks.find(cp => cp.id === candlePackId)
  )

  if (!currentCandlesPack) {
    return <h1>NOT FOUND</h1>
  }
  
  return (
    <ul className="px-3">
      {
        (currentCandlesPack.type === 'Colores' || currentCandlesPack.type === 'Doradas') &&
        currentCandlesPack.names.map((name, idx) => (
          <input 
            className="w-full my-2 p-1"
            key={`${name}-${idx}`}
            type="text"
            defaultValue={name}
            placeholder="Nombre de la vela"
          />
        ))
      }
    </ul>
  )
}

export default CandlesPackNames