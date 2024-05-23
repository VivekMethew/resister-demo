import React from "react";

const InputBox = ({ label, type, name, value, placeholder, onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-bold">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className=" bg-gray-100 border-none pl-2 py-1"
      />
    </div>
  );
};

export default InputBox;
