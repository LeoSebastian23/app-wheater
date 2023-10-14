import { CircularProgress} from "@mui/material";
import { useWeatherContext } from './context/WheaterContext';
import CustomInput from './components/CustomInput';
import "./App.css";
import HomeWheater from "./components/HomeWheater";

function App() {
  const {
    setCityName,
    inputText,
    setInputText,
    data,
    loading,
  } = useWeatherContext();

  const handleClick = () => {
    setCityName(inputText); // Cambia el estado usando inputText
    setInputText("");
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setCityName(e.target.value);
      setInputText('');
    }
  }

  return (
    <div>
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
            data={data}
            loading={loading}
          />
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default App;

