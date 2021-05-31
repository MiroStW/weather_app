import "core-js/stable";
import "regenerator-runtime/runtime";

const getWeatherData = async (lat, lon) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=944ab13f6c35a86d9df37f8035ffb962&units=${
      document.querySelector('.tempUnitToggle').getAttribute('data-tempUnit')
    }`
  );
  const weather = await data.json();
  if (weather.cod === 200) {
    return weather;
  }
  throw new Error(`Error from weather API: ${weather.message}`);
};

export default async (lat, lon) => {
  const weatherObject = await getWeatherData(lat, lon);

  return weatherObject;
};
