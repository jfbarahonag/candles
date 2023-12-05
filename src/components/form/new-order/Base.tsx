import { useNewFormContext } from "./NewOrderContext";
import { IBase } from "./interfaces";

const Base = ({ base }: { base: IBase }) => {
  const { getBaseById, updateBaseById } = useNewFormContext();

  const changePhrase = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentBase = getBaseById(base.id);
    if (!currentBase) return;
    currentBase.phrase = e.currentTarget.value.trim();
    updateBaseById(currentBase);
  };

  return (
    <div className="flex flex-col w-full px-3">
      {/* Frase */}
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={`grid-bases-design-${base.id}`}
      >
        Frase
      </label>
      <input
        id={`grid-bases-design-${base.id}`}
        className="w-10/12 my-2 p-1"
        type="text"
        value={base.phrase || ""}
        placeholder="Frase (opcional)"
        onChange={changePhrase}
      />
    </div>
  );
};

export default Base;
