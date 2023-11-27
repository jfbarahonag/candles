import { useState } from "react";

import { ICandlesPack } from "./interfaces";

const CandlesPackNameFields = ({
  candlesPack,
  fieldIdx,
}: {
  candlesPack: ICandlesPack;
  fieldIdx: number;
}) => {

  const [name, setName] = useState(candlesPack.names[fieldIdx]);

  const changeNameOfCandlesPack = (e: React.ChangeEvent<HTMLInputElement>) => {
    // update the input
    setName(e.target.value);
  };

  const setCandlesPackName = () => {
    
  }

  return (
    <div className="flex">
      <div className="w-1/12 flex flex-col justify-center">
        <span>
          {fieldIdx + 1}. 
        </span>
      </div>
      <input
        className="w-10/12 my-2 p-1"
        type="text"
        value={name}
        placeholder="Nombre de la vela"
        onChange={changeNameOfCandlesPack}
      />
    </div>
  );
};

export default CandlesPackNameFields;
