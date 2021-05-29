/* eslint-disable default-case */
import { doc } from "prettier";
import processWeatherData from "./weatherAPI";
import "./style.css";

// const googleMaps = document.createElement( 'script' );
// googleMaps.type = 'text/javascript';
// googleMaps.setAttribute('async','');
// googleMaps.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAIXnlAQS0Ph5II7bXGZ_A_DJpHj1Q6y_U&libraries=places&callback=initAutocomplete';
// document.head.append( googleMaps);

const input = document.createElement("input");
document.body.appendChild(input);
// const btn = document.createElement("button");
// btn.textContent = "send";
// btn.addEventListener("click", () => {
//   processWeatherData(input.value);
// });
// document.body.appendChild(btn);

// This sample uses the Places Autocomplete widget to:
// 1. Help the user select a place
// 2. Retrieve the address components associated with that place
// 3. Populate the form fields with those address components.
// This sample requires the Places library, Maps JavaScript API.
// Include the libraries=places parameter when you first load the API.
// For example: <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let autocomplete;

function fillInAddress() {
  // Get the place details from the autocomplete object.
  const place = autocomplete.getPlace();
  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  // place.address_components are google.maps.GeocoderAddressComponent objects
  // which are documented at http://goo.gle/3l5i5Mr

  // eslint-disable-next-line no-restricted-syntax
  for (const component of place.address_components) {
    const componentType = component.types[0];

    switch (componentType) {
      case "street_address": {
        input.value += `${component.long_name}`;
        break;
      }

      // case "route": {
      //   input.value += component.short_name;
      //   break;
      // }

      // case "postal_code": {
      //   input.value += `${component.long_name}`;
      //   break;
      // }

      // case "postal_code_suffix": {
      //   input.value += `${component.long_name}`;
      //   break;
      // }
      // case "locality":
      //   input.value += component.long_name;
      //   break;

      // case "administrative_area_level_1": {
      //   input.value += component.short_name;
      //   break;
      // }
      // case "country":
      //   input.value += component.long_name;
      //   break;
    }
  }
  processWeatherData(
    place.geometry.location.lat(),
    place.geometry.location.lng()
  ).catch((err) => {
    console.error(err);
  });
  // After filling the form with address components from the Autocomplete
  // prediction, set cursor focus on the second address line to encourage
  // entry of subpremise information such as apartment, unit, or floor number.
  // address2Field.focus();
}

function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // addresses in the US and Canada.
  autocomplete = new google.maps.places.Autocomplete(input, {
    componentRestrictions: { country: ["de"] },
    fields: ["address_components", "geometry"],
    types: ["(regions)"],
  });
  input.focus();

  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener("place_changed", fillInAddress);
}
google.maps.event.addDomListener(window, "load", initAutocomplete);
// -[x] function API query (input: location, output weather data - start with console
// -[x] function process data (input:JSON data, output: object with only required data
// -[x] form wit location input
// -[ ] Display the information on your webpage!
// -[ ] Add any styling you like!
// -[ ] Optional: add a ‘loading’ component that displays from the time the form is submitted until the information comes back from the API.
// -[ ] Push that baby to github and share your solution below!

// changing the color of the background or by adding images that describe the
// weather. (You could even use the Giphy API to find appropriate
// weather-related gifs and display them).

// toggle displaying the data in Fahrenheit or Celsius.
