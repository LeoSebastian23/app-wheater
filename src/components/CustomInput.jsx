import React from 'react';
import "../App.css";

const CustomInput = ({ label, value, onChange, onKeyDown }) => {
  return (
    <input
      type="text"
      placeholder={label}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="custom-input"
    />
  );
};

export default CustomInput;