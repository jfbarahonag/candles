const BaseFields = () => {
  return (
    <>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-bases-qty"
        >
          Cantidad
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-bases-qty"
          type="number"
          placeholder="ej: 1"
          min={0}
        />
        <p className="text-red-500 text-xs italic">
          Please fill out this field.
        </p>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-phone-number"
        >
          Frase
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-phone-number"
          type="tel"
          placeholder="XXXXXXXXXX"
        />
      </div>
    </>
  );
};

export default BaseFields;
