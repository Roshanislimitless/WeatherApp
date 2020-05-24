// const apiKey = '59185fe37add6c8acc84396e14ca9eab';
// let latitude;
// let longitude;
// const notification = document.getElementsByClassName('notification')[0];
// let weather;

// getLocation();
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     }
// }

// function kelvinToCelsius(temp) {
//     return temp - 273.15;
// }

// function onSuccess(position) {
//     console.log(position);
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;

//     const weatherCall = fetch('https://api.openweathermap.org/data/2.5/weather?'
//                             + 'lat=' + latitude
//                             + '&lon=' + longitude
//                             + '&appid=' + apiKey);

//     weatherCall.then(response => response.json())
//             .then(weatherInfo => {
//                 console.log(weatherInfo)
//                 console.log(weatherInfo.weather[0].icon);
//                 console.log(kelvinToCelsius(weatherInfo.main.temp).toFixed(1));
//                 console.log(weatherInfo.weather[0].main);
//                 console.log(weatherInfo.name);
//             });
// }

// function onError(error) {
//     console.error('No no no ', error);
//     // 1. take message and put it in a p
//     const p = document.createElement('p');
//     p.innerHTML = error.message;
//     // 2. display: block (notification div)
//     notification.style.display = 'block';
//     // 3. append p inside notification
//     notification.appendChild(p);
// }

//..........................................done by me................................................................
//first we declare the variables
const apiKey = '59185fe37add6c8acc84396e14ca9eab';
let input = document.querySelector('input');


const toGetValue = (position) => {
  position.preventDefault()
  const randomCity = document.querySelector('input').value;
  const cityLowerCase = randomCity.toLowerCase();
  const cityName = cityLowerCase.charAt(0).toUpperCase() + cityLowerCase.slice(1);
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  console.log(url);

  fetch(url)
    .then(function (response) {
      console.log('fetch URL', response);

      return response.json();
    })
    .then(function weatherToCallOnResponse(weatherInfo) {
      console.log('weatherInfo', weatherInfo);
      
        let tempL = document.querySelector('.temperature-value p span:nth-child(1)');
        let icon = document.querySelector('.weather-icon img');
        let tempDescription = document.querySelector('.temperature-description p');
        let location = document.querySelector('.location p');

        tempL.innerHTML = '';
        icon.src = `icons/unknown.png`;
        location.innerHTML = "City name invalid";


        if (weatherInfo.name === cityName) {
          tempL.innerHTML = (weatherInfo.main.temp - 273.15).toFixed(2);
          let iconId = weatherInfo.weather[0].icon;
          icon.src = `icons/${iconId}.png`;
          tempDescription.innerHTML = weatherInfo.weather[0].description;
          location.innerHTML = weatherInfo.name;

        } else {
          tempDescription.innerHTML = `error ${weatherInfo.cod} &
          ${weatherInfo.message}`


        }
      }
      )
    }





input.addEventListener('keyup', toGetValue);