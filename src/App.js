import { useState } from 'react';
import './App.css';
import getLocation from '../Utilities/api';
import getWeather from '../Utilities/api';
function App() {



 const handleSubmit = async (zipcode) => {
  try {
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
}

export default App;
