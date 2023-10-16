import React, { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export function useWeatherContext() {
  return useContext(WeatherContext);
}

export function WeatherProvider({ children }) {
  const [cityName, setCityName] = useState("Mar del plata");
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => {
        if (res.status === 200) {
          error && setError(false);
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [cityName, error]);

  return (
    <WeatherContext.Provider
      value={{
        cityName,
        setCityName,
        inputText,
        setInputText,
        data,
        error,
        loading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
