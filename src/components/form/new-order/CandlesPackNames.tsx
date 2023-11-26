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
    <ul className="px-3 w-full">
      {
        (currentCandlesPack.type === 'Colores' || currentCandlesPack.type === 'Doradas') &&
        currentCandlesPack.names.map((name, idx) => (
          <div key={`${name}-${idx}`}>
            <span className="w-1/12">{idx+1}. </span>
            <input 
              className="w-11/12 my-2 p-1"
              type="text"
              defaultValue={name}
              placeholder="Nombre de la vela"
            />
          </div>
        ))
      }
    </ul>
  )
}

export default CandlesPackNames