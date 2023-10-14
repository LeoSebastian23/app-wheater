import React from "react";
import "../App.css";

const CustomInput = ({ label, value, onChange, onKeyDown}) => {
  return (
    <nav class="navbar navbar-dark bg-dark justify-content-between">
      <div className="p-2">
        <a href="#"class="navbar-brand">
          <img
            src="./assets/clima.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
          />
          WheaterApp
        </a>
      </div>
      <div className=" p-2">
        <input
          type="text"
          placeholder={label}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          class="form-control mr-sm-2"
        />
      </div>
    </nav>
  );
};

export default CustomInput;
