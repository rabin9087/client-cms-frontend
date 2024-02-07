import { InputText } from "primereact/inputtext";

// eslint-disable-next-line react/prop-types
export const CustomeInput = ({ placeholder, handelOnSearch }) => {
  return (
    <InputText
      className="flex w-full rounded-full hover:border-black hover:cursor-pointer shadow-lg  border-2 border-black/35 py-2 ps-4"
      type="text"
      onChange={handelOnSearch}
      placeholder={placeholder}
    />
  );
};
