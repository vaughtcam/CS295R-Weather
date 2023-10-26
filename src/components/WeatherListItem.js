import {getWeekday} from '../utilities/dates';
function WeatherListItem ({onDayClick, index, forecastDay}) {

    const handleClick = () => {
        onDayClick(index); 
      };

      
    
      return (
        <div className="weather-list-item" onClick={handleClick}>
          <p>{getWeekday(forecastDay.dt)}</p>
          <p>Temperature: {forecastDay.temperature}°C</p>
        </div>
      );
    };


    export default WeatherListItem