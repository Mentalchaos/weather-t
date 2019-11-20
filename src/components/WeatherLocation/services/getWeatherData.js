import { formatTemperature } from './formatTemperature';
import { 
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../constants/weathers';


const getWeatherState = weather_data => {
    const { id }   = weather_data.weather[0];

    if(id < 300) {
        return THUNDER;
    } else if( id < 400){
        return DRIZZLE;
    } else if(id < 600){
        return RAIN;
    } else if(id < 700){
        return SNOW
    } else if(id === 800){
        return SUN;
    } else {
        return CLOUD;
    }
};

const getCity = data => {
    const { name } = data;
    return name;
};

const getData = weather_data => {

    const { humidity , temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);

    console.log('weatherState',weatherState);

    //Temp is actually coming in Kelvin, so I converted it into Celcius
    const temperature = formatTemperature(temp);

    const newData = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    };

    return newData;
};

export { getData , getCity };