import { Slide } from "@mui/material";
import React from "react";
import "../App.css";
import { WiHumidity, WiCloudyGusts, WiThermometer } from "react-icons/wi";

const containerStyles = {
  maxWidth: "80%", // Establece el ancho máximo del contenedor
  margin: "0 auto", // Centra el contenedor en el medio
};

const HomeWeather = ({ data, loading }) => {
  return (
    <div className="bg_img" style={containerStyles}>
      <div className="bg-01">
        <div className="city">{data.name}</div>
        <div className="temp">{data.main.temp.toFixed()} °C</div>
        <div className="group">
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=""
            className="weather-icon"
          />
          <div className="weather-description">{data.weather[0].main}</div>
        </div>
      </div>
        <div className="temperature-min-max">
          <h2 className="min-max-temperature">
            Min: {data.main.temp_min.toFixed()} °C
          </h2>
          <h2 className="divider"> </h2>
          <h2 className="min-max-temperature">
            Max: {data.main.temp_max.toFixed()} °C
          </h2>
        </div>
      <Slide direction="right" timeout={800} in={!loading}>
        <div className="box_container">
          <div className="box">
            <div className="inside-box">
              <WiHumidity style={{ color: "#fff", fontSize: "50px" }} />
              <p>Humidity</p>
            </div>
            <h1>{data.main.humidity.toFixed()}%</h1>
          </div>

          <div className="box">
            <div className="inside-box">
              <WiCloudyGusts style={{ color: "#fff", fontSize: "50px" }} />
              <p>Wind</p>
            </div>
            <h1>{data.wind.speed.toFixed()} km/h</h1>
          </div>

          <div className="box">
            <div className="inside-box">
              <WiThermometer style={{ color: "#fff", fontSize: "50px" }} />
              <p>Feels Like</p>
            </div>
            <h1>{data.main.feels_like.toFixed()} °C</h1>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default HomeWeather;
