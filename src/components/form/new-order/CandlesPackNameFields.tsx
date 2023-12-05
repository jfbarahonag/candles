import { ICandlesPack } from "./interfaces";
import { useNewFormContext } from "./NewOrderContext";

const CandlesPackNameFields = ({
  candlesPack,
  fieldIdx,
}: {
  candlesPack: ICandlesPack;
  fieldIdx: number;
}) => {

  const { getCandlesPackById, updateCandlesPackById } =
    useNewFormContext();

  const changeNameOfCandlesPack = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentCandlesPack = getCandlesPackById(candlesPack.id);

    if (!currentCandlesPack) return;

    const idxName = Number(e.currentTarget.id.split(" - ")[1]);

    if (isNaN(idxName)) return;

    currentCandlesPack.names[idxName] = e.currentTarget.value;

    updateCandlesPackById(currentCandlesPack);
  };

  return (
    <div className="flex">
      <div className="w-1/12 flex flex-col justify-center">
        <span>
          {fieldIdx + 1}. 
        </span>
      </div>
      <input
        id={`${candlesPack.id} - ${fieldIdx}`}
        className="w-10/12 my-2 p-1"
        type="text"
        value={candlesPack.names[fieldIdx]}
        placeholder="Nombre de la vela"
        onChange={changeNameOfCandlesPack}
      />
    </div>
  );
};

export default CandlesPackNameFields;
