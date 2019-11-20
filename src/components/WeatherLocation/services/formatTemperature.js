// Convert kelvin to celcius temperature
const formatTemperature = temperature => {
    return Math.floor(temperature - 273.15);
};

export { formatTemperature };