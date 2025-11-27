import React from "react";

function Input({
  inputType,
  inputName,
  inputPlaceholder,
  inputValue,
  inputId,
  options,
  onChange,
}) {
  // TEXTAREA
  if (inputType === "textarea") {
    return (
      <textarea
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={onChange}
        className="border p-3 h-32 rounded-md w-full resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
      ></textarea>
    );
  }

  // SELECT / DROPDOWN
  if (inputType === "select") {
    return (
      <select
        name={inputName}
        id={inputId}
        onChange={onChange}
        className="border p-3 rounded-md w-full"
      >
        <option value="">{inputPlaceholder}</option>
        {options?.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  }

  // RADIO GROUP
  if (inputType === "radio") {
    return (
      <div className="flex gap-5 items-center">
        {options.map((opt, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={inputName}
              value={opt}
              onChange={onChange}
              className="cursor-pointer"
            />
            {opt}
          </label>
        ))}
      </div>
    );
  }

  // NORMAL INPUTS
  return (
    <input
      type={inputType}
      name={inputName}
      id={inputId}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={onChange}
      className="border p-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  );
}

export default Input;
