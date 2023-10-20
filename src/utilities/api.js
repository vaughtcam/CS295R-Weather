import axios from 'axios';
import parseForecast from "./weatherParsing"

const apikey = 'appid=7a4894e39e52293f784d65a99b035456';

export const getLocation = async (zipcode) => {
    const geoUrl =
        "http://api.openweathermap.org/geo/1.0/zip?";

    const response = await axios.get(`${geoUrl}zip=${zipcode},US&${apikey}`)
       // .then(response => response.json())
       console.log(response)

       const data = {
        lat: response.data.lat,
         lng: response.data.lon,
         name: response.data.name
     }
    
     console.log(data);
    return (data)
};



export const getWeather = async (lat, lng) => {
    const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&";

    const response = await axios.get(`${weatherUrl}lat=${lat}&lon=${lng}&${apikey}`)

    console.log(response);
    return parseForecast(response.data.list);



}


