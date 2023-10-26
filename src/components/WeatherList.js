import {getWeekday} from '../utilities/dates';
import WeatherListItem from "./WeatherListItem";

function WeatherList({ forecast, onDayClick }) {


    const renderedWeather = forecast.map((forecastDay, index) => {
        return <WeatherListItem
        key={getWeekday(forecastDay.dt)}
        forecastDay={forecastDay}
        index={index}
        onDayClick={onDayClick}
      />;
      });
    

      return <div className="weather-list">{renderedWeather}</div>;
 }
  
export default WeatherList