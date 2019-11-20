import { apiKey , urlBaseWeather } from '../constants/weather_api';

const getWeatherByCity = city => {
    return `${urlBaseWeather}?q=${city}&appid=${apiKey}`;
}

export { getWeatherByCity };