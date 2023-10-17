import React from "react";


const FiveDayForecast = ({ data }) => {
  if (!data || !data.list || data.list.length === 0) {
    return null; // Evita errores si no hay datos disponibles
  }

  const forecastItems = data.list;

  // Inicializa un objeto para rastrear los días ya mostrados
  const daysShown = {};

  return (
    <div className="centered-horizontal">
    <div className="week">
      <div>
        <h2 style={{display:"flex", alignItems:"center",justifyContent:"center"}}>View all week</h2>
        {forecastItems.map((item, index) => {
          const date = new Date(item.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          });
          const weatherDescription = item.weather[0].description;

          // Si el día ya ha sido mostrado, omitir la repetición
          if (daysShown[date]) {
            return null;
          }

          // Marcar el día como mostrado
          daysShown[date] = true;

          return (
            <div key={index} className="allWeek">
              <div className="card-body">
                <h4 className="card-title">{date}</h4>
                <p className="card-text">{weatherDescription}</p>
                <div className="data-card">
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt="Weather Icon"
                  />
                  <p className="card-text">{item.main.temp.toFixed()} °C</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default FiveDayForecast;

