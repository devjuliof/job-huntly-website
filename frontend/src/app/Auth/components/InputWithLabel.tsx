import React from "react";

interface InputWithLabelProps {
    labelText: string;
    InputPlaceHolder: string;
}

export default function InputWithLabel({labelText, InputPlaceHolder}: InputWithLabelProps) {
    return (
        <>
          <label htmlFor={"full-name"}>
              <p className={"text-gray-600 font-semibold mb-1"}>{labelText}</p>
          </label>
          <input
              className={"border px-4 py-3 w-full focus:outline-none"}
              id={"full-name"} type={"text"}
              placeholder={InputPlaceHolder}
          />
        </>

)
}