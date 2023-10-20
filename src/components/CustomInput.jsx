import React from "react";
import "../App.css";

const CustomInput = ({ label, value, onChange, onKeyDown, onButtonClick }) => {
  return (
    <nav className="navbar navbar-dark justify-content-between" style={{background:"#010038", marginBottom:'10px'}}>
      <div className="p-2">
        <div className="navbar-brand" style={{fontSize:'25px'}}>
          <img
            src="./public/assets/clima.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          WeatherApp
        </div>
      </div>
      <div className="d-flex">
        <input
          type="text"
          placeholder={label}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="form-control mr-sm-2"
          style={{ marginRight: "10px" }}
        />
        <button onClick={onButtonClick} className="buttonSearch">
          <img src="assets/buscar.png" alt="vista" className="centered-image"/>
        </button>
      </div>
    </nav>
  );
};

export default CustomInput;
