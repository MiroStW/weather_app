import processWeatherData from "./weatherAPI";

const input = document.createElement('input');
document.body.appendChild(input);
const btn = document.createElement('button');
btn.textContent = 'send';
btn.addEventListener('click', () => {processWeatherData(input.value)})
document.body.appendChild(btn);

// async src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAIXnlAQS0Ph5II7bXGZ_A_DJpHj1Q6y_U&libraries=places&callback=initMap'

// -[x] function API query (input: location, output weather data - start with console
// -[x] function process data (input:JSON data, output: object with only required data
// -[ ] form wit location input
// -[ ] Display the information on your webpage!
// -[ ] Add any styling you like!
// -[ ] Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.
// -[ ] Push that baby to github and share your solution below!

// changing the color of the background or by adding images that describe the
// weather. (You could even use the Giphy API to find appropriate
// weather-related gifs and display them).

// toggle displaying the data in Fahrenheit or Celsius.