import {Slide} from "@mui/material";
import React from "react";
import "../App.css";

const HomeWheater = ({ data,loading}) => {
  return (
    <div className="bg_img">
      <h1 className="city">{data.name}</h1>
      <div className="group">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
        />
        <h1>{data.weather[0].main}</h1>
      </div>

      <h1 className="temp">{data.main.temp.toFixed()} °C</h1>

      <Slide direction="right" timeout={800} in={!loading}>
        <div className="box_container">
          <div className="box">
            <p>Humidity</p>
            <h1>{data.main.humidity.toFixed()}%</h1>
          </div>

          <div className="box">
            <p>Wind</p>
            <h1>{data.wind.speed.toFixed()} km/h</h1>
          </div>

          <div className="box">
            <p>Feels Like</p>
            <h1>{data.main.feels_like.toFixed()} °C</h1>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default HomeWheater;
