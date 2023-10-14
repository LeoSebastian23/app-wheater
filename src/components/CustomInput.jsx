import React from "react";
import "../App.css";

const CustomInput = ({ label, value, onChange, onKeyDown, onButtonClick }) => {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <div className="p-2">
        <a href="#" className="navbar-brand" >
          <img
            src="./assets/clima.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Weather App Logo"
            style={{ marginRight: "10px" }}
          />
          WeatherApp
        </a>
      </div>
      <div class="d-flex">
        <input
          type="text"
          placeholder={label}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="form-control mr-sm-2"
          style={{ marginRight: "10px" }}
        />
        <button onClick={onButtonClick} className="btn btn-info" style={{ marginRight: "10px" }}>
          <img src="assets/buscar.png" alt="Image" className="centered-image"/>
        </button>
      </div>
    </nav>
  );
};

export default CustomInput;
