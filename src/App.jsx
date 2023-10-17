import { CircularProgress } from "@mui/material";
import { useWeatherContext } from './context/WheaterContext';
import CustomInput from './components/CustomInput';
import HomeWheater from "./components/HomeWheater";
import FiveDayForecast from "./components/FiveDayForecast"; // Importa el nuevo componente
import "./App.css";

function App() {
  const {
    setCityName,
    inputText,
    setInputText,
    currentWeatherData, // Accede a los datos del clima actual
    forecastData, // Accede a los datos del pronóstico de 5 días
    loading,
  } = useWeatherContext();

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

  return (
    <div className="home">
      {!loading ? (
        <>
          <CustomInput
            label="Search location"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleSearch}
            onButtonClick={handleClick}
          />
          <HomeWheater
            data={currentWeatherData} // Pasa los datos del clima actual
          />
          <FiveDayForecast
            data={forecastData} // Pasa los datos del pronóstico de 5 días
          />
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default App;


