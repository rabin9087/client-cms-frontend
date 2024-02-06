import { useState } from "react";
import { InputText } from "primereact/inputtext";

// eslint-disable-next-line react/prop-types
export const CustomeInput = ({ placeholder }) => {
  const [value, setValue] = useState("");
  return (
    <InputText
      className="flex w-full rounded-2xl hover:border-black border-2 py-2 ps-4"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};
