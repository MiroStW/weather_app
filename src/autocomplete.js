import processWeatherData from "./weatherAPI";

let autocomplete;

async function showWeather(weatherObject) {
  const resultsDiv = document.querySelector(".results");
  const weatherIcon = document.querySelector(".weatherIcon");
  const weatherDiv = document.querySelector(".weather");
  const tempDiv = document.querySelector(".temperature");
  const preciDiv = document.querySelector(".precipitation");

  resultsDiv.classList.remove("hidden");
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@4x.png`
  );
  weatherDiv.textContent = weatherObject.weather[0].main;
  tempDiv.textContent = weatherObject.main.temp;
  if (weatherObject.rain) preciDiv.textContent = weatherObject.rain["1h"];

  // console.log(weatherObject);
  // console.log(weatherObject.name);
  // console.log(weatherObject.weather[0].main);
  // console.log(weatherObject.main.temp);
  // console.log(
  //   `https://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@4x.png`
  // );
}

async function getWeather(place) {
  try {
    const weatherObject = await processWeatherData(
      place.geometry.location.lat(),
      place.geometry.location.lng()
    );
    showWeather(weatherObject);
  } catch (err) {
    console.error(err);
  }
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  const place = autocomplete.getPlace();
  const input = document.querySelector("input");
  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  // place.address_components are google.maps.GeocoderAddressComponent objects
  // which are documented at http://goo.gle/3l5i5Mr

  // eslint-disable-next-line no-restricted-syntax
  for (const component of place.address_components) {
    const componentType = component.types[0];

    if (componentType === "street_address") {
      input.value += `${component.long_name}`;
    }
    // switch (componentType) {
    //   case "street_address": {
    // input.value += `${component.long_name}`;
    //     break;
    //   }

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
    // }
  }

  getWeather(place);
}

export default function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // addresses in the US and Canada.
  const input = document.querySelector("input");
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
