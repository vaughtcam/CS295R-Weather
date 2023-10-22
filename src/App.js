import { useState } from 'react';
import './App.css';
import { getLocation, getWeather } from './utilities/api';
import ZipForm from "./components/ZipForm" 
import CurrentDay from "./components/CurrentDay" 
//import WeatherListItem from "./components/WeatherListItem" 

function App() {
console.log("hello world")

const [city, setCity] = useState([]);
const [forecast, setForecast] = useState([]);
const [selectedDay, setSelectedDay] = useState('');

 const handleSubmit = async (zipcode) => {
console.log ("hello world")
  try {
    console.log ("hello world")
    const city = await getLocation(zipcode);
    const forecast = await getWeather(city.lat, city.lng)

    setCity(city)
    setForecast(forecast)
    setSelectedDay(null)

    console.log({city})
    console.log({forecast})


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

 console.log(forecast[0])
//<WeatherListItem  forecastDay = {forecast[0]} />
if(forecast != []){
 return (
  <div>
      <ZipForm onSubmit={handleSubmit} />
      <CurrentDay city = {city} forecastDay = {forecast[0]} />
      
  </div>
);}

else  ( <ZipForm onSubmit={handleSubmit} />)
}

export default App;
