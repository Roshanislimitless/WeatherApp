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

let weather;
//to get the location using the geolocation...the first step


const getLocation = () => {navigator.geolocation.getCurrentPosition(onSuccess, onError)};

//2nd step to define function if the user denies the location...it finds message key inside the object in api incase of error.
const onError = (error) => {
  console.log('onError function', error);
  const {
    message
  } = error;
  var notification = document.querySelector('.notification');
  notification.innerHTML = message;
  notification.style.display = 'block';
}
//3rd step is in case of success....access the keys of the objects of the api 
const onSuccess = (position) =>{ 
  console.log('Onsuccess function ', position );
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  console.log(url);

  fetch(url)
    .then(function (response) {
      console.log('latest',response);
      return response.json();
    })
    .then((weather) => {
          weatherToCallOnResponse(weather);
          console.log('res', weather);
          })
    }


// step 4 ...we created this to pass it to the fetch function after getting data in json format
const weatherToCallOnResponse = (weatherInfo) => {
  let temp = document.querySelector('.temperature-value p span:nth-child(1)');
  let icon = document.querySelector('.weather-icon img');
  let tempDescription = document.querySelector('.temperature-description p');
  let location = document.querySelector('.location p');
  temp.innerHTML = (weatherInfo.main.temp - 273.15).toFixed(2);
  let iconId = weatherInfo.weather[0].icon;
  icon.src = `icons/${iconId}.png`;
  tempDescription.innerHTML = weatherInfo.weather[0].description;
  location.innerHTML = weatherInfo.name;
  
  } 
getLocation();



