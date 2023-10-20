import { CircularProgress } from "@mui/material";
import { useWeatherContext } from './context/WheaterContext';
import CustomInput from './components/CustomInput';
import HomeWheater from "./components/HomeWheater";
import FiveDayForecast from "./components/FiveDayForecast";
import "./App.css";
import { useState } from 'react';

function App() {
  const {
    setCityName,
    inputText,
    setInputText,
    currentWeatherData,
    forecastData,
    loading,
  } = useWeatherContext();

  const [showFiveDayForecast, setShowFiveDayForecast] = useState(false);

  const handleClick = () => {
    setCityName(inputText);
    setInputText("");
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setCityName(e.target.value);
      setInputText('');
    }
  }

  const toggleFiveDayForecast = () => {
    setShowFiveDayForecast(!showFiveDayForecast);
  }

  return (
    <div className="home">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <CustomInput
            label="Search location"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleSearch}
            onButtonClick={handleClick}
          />
          {showFiveDayForecast ? (
            <FiveDayForecast data={forecastData} />
          ) : (
            <HomeWheater data={currentWeatherData} />
          )}
          <button className='toggle-button' onClick={toggleFiveDayForecast}>
            {showFiveDayForecast ? 'Hide Five-Day Forecast' : 'Show Five-Day Forecast'}
          </button>
        </>
      )}
    </div>
  );
}

export default App;





