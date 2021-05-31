import initAutocomplete from "./autocomplete";
import "./style.css";

const contentDiv = document.createElement("div");
contentDiv.id = "content";
document.body.appendChild(contentDiv);

const headerDiv = document.createElement("div");
headerDiv.className = "header";
headerDiv.textContent = "Weather-App";
contentDiv.appendChild(headerDiv);

const input = document.createElement("input");
contentDiv.appendChild(input);
// const btn = document.createElement("button");
// btn.textContent = "send";
// btn.addEventListener("click", () => {
//   processWeatherData(input.value);
// });
// document.body.appendChild(btn);

// Weather output
const resultsDiv = document.createElement("div");
resultsDiv.className = "results hidden";
contentDiv.appendChild(resultsDiv);

const weatherIcon = document.createElement("img");
weatherIcon.className = "weatherIcon";
resultsDiv.appendChild(weatherIcon);

const weatherDiv = document.createElement("div");
weatherDiv.className = "weather";
resultsDiv.appendChild(weatherDiv);

// temperature
const tempDiv = document.createElement("div");
tempDiv.className = "tempDiv";
resultsDiv.appendChild(tempDiv);
const temperature = document.createElement("span");
temperature.className = "temperature";
tempDiv.appendChild(temperature);
const tempUnit = document.createElement("span");
tempUnit.className = "tempUnit";
tempUnit.textContent = '°C';
tempDiv.appendChild(tempUnit);

// °C <-> °F toggle
const tempUnitToggle = document.createElement("button");
tempUnitToggle.textContent = "show °F";
tempUnitToggle.className = "tempUnitToggle";
tempUnitToggle.setAttribute("data-tempUnit", "metric");
tempUnitToggle.addEventListener("click", () => {
  const currentTempUnit = tempUnitToggle.getAttribute("data-tempUnit");
  if (currentTempUnit === "metric") {
    tempUnitToggle.setAttribute("data-tempUnit", "imperial");
    tempUnitToggle.textContent = "show °C";
    tempUnit.textContent = "°F";
    if (temperature.textContent)
    temperature.textContent =
        Math.round(((temperature.textContent * 9) / 5 + 32) * 100) / 100;
  } else {
    tempUnitToggle.setAttribute("data-tempUnit", "metric");
    tempUnitToggle.textContent = "show °F";
    tempUnit.textContent = "°C";
    if (temperature.textContent)
    temperature.textContent =
        Math.round((((temperature.textContent - 32) * 5) / 9) * 100) / 100;
  }
});
tempDiv.appendChild(tempUnitToggle);

const precDiv = document.createElement("div");
precDiv.className = "precipitation";
resultsDiv.appendChild(precDiv);

google.maps.event.addDomListener(window, "load", initAutocomplete);

// TODO:
// -[x] function API query (input: location, output weather data - start with console
// -[x] function process data (input:JSON data, output: object with only required data
// -[x] form wit location input
// -[ ] Display the information on your webpage!
// -[ ] Add any styling you like! giphy API?
// -[ ] Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.
// -[ ] Push that baby to github and share your solution below!
// -[ ] Add toggle C<->F - formula (°F − 32) × 5/9 = °C

// changing the color of the background or by adding images that describe the
// weather. (You could even use the Giphy API to find appropriate
// weather-related gifs and display them).
