import {
    SUNNY, 
    FOG,
    CLOUD,
    CLOUDY,
    RAIN,
    SNOW,
    WIND
} from '../constants/weathers.js';

//Get a random icon and then pass it to the data
const choices = [SUNNY,FOG,CLOUD,CLOUDY,RAIN,SNOW,WIND];
const getRandomWeather = () => {
    return choices[Math.floor(Math.random() * 6)];
};

export { getRandomWeather };