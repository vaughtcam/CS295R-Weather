import { useState } from 'react';
import './App.css';
import { getLocation, getWeather } from './utilities/api';
import ZipForm from "./components/ZipForm" 
import CurrentDay from "./components/CurrentDay" 
import WeatherListItem from "./components/WeatherListItem" 
import WeatherList from './components/WeatherList';

function App() {


const [city, setCity] = useState([]);
const [forecast, setForecast] = useState([]);
const [selectedDay, setSelectedDay] = useState(null);




 const handleSubmit = async (zipcode) => {

  try {
    const city = await getLocation(zipcode);
    const forecast = await getWeather(city.lat, city.lng)
    setCity(city)
    setForecast(forecast)
    setSelectedDay(null)


  } catch (error) {
    if (error.response) {
      // 5xx or 4xx error console.log(error.response.data); console.log(error.response.status); console.log(error.response.headers);
      }
      else if (error.request) {
      // request never left console.log(error.request);
      } else {
        // anything else
      console.log(error.message); }
    
  }
 }

 const handleDayClick = (index) => {
  setSelectedDay(index)
}


 return (
  <div>
      <ZipForm onSubmit={handleSubmit} />
      {selectedDay !== null && 
      <CurrentDay forecastDay={forecast[selectedDay]} 
          city={city} />}
      <WeatherList  forecast = {forecast} onDayClick={handleDayClick}/>
      
  </div>
)
}

export default App;
