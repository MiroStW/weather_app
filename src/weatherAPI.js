import "core-js/stable";
import "regenerator-runtime/runtime";

const getWeatherData = async (location) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=944ab13f6c35a86d9df37f8035ffb962`);
  const weather = await data.json();
  return weather
};

export default async (location) => {
  
  const weatherObject = await getWeatherData(location);
  
  console.log(weatherObject.name);
  console.log(weatherObject.weather[0].main);
  console.log(weatherObject.main.temp);
  console.log(`https://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@4x.png`);
  
}