const tempDesc = document.querySelector('#weather-desc');
const weatherIcon = document.querySelector('#weather-icon');
const weatherForecast = document.querySelector('#weather-forecast');
const alertMessage = document.querySelector('#alert-message');

const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42621&lon=-86.92234&units=imperial&appid=166fd1db0316d6728d136a8ed1d8912a';
const weatherForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42621&lon=-86.92234&units=imperial&cnt=8&appid=166fd1db0316d6728d136a8ed1d8912a';

async function apiFetchCurrent() {
    try {
        const response = await fetch(currentWeatherURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            fetchWeatherAlerts(data.coord.lat, data.coord.lon);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchCurrent();

function displayResults(data) {
    let desc = data.weather[0].description;
    let temp = data.main.temp;
    let humidity = data.main.humidity;

    tempDesc.innerHTML = `<br>${temp.toFixed(0)}&deg;F ${desc} <br>${humidity}% humidity`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `weather icon - ${data.weather[0].icon}`);
}

async function fetchWeatherAlerts(latitude, longitude) {
    const weatherAlertsURL = `https://api.weather.gov/alerts?point=${latitude},${longitude}`;

    try {
        const response = await fetch(weatherAlertsURL);
        if (response.ok) {
            const data = await response.json();
            if (data.features && data.features.length > 0) {
                const alert = data.features[0].properties;
                alertMessage.innerHTML = `<strong>${alert.headline}</strong>: ${alert.description}`;
                document.getElementById('alert').style.display = 'block';
            } else {
                // Hide the alert element if there are no alerts
                document.getElementById('alert').style.display = 'none';
            }
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


async function apiFetchForecast() {
    try {
        const response = await fetch(weatherForecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchForecast();

function displayForecast(data) {
    let dataList = data.list;

    dataList.forEach((data, index) => {
        if (data.dt_txt.split(" ")[1].split(":")[0] == "09") {
            let sectionForecast = document.createElement('section');
            let headingForecast = document.createElement('h4');
            let imgForecast = document.createElement('img');
            let paraForecast = document.createElement('p');

            let date = new Date(data.dt_txt);
            let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let dayOfWeek = daysOfWeek[date.getDay()];

            headingForecast.textContent = dayOfWeek;

            headingForecast.textContent = dayOfWeek;
            const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            imgForecast.setAttribute('src', iconsrc);
            imgForecast.setAttribute('alt', `weather icon - ${data.weather[0].icon}`)
            paraForecast.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;

            sectionForecast.classList.add('card');

            sectionForecast.appendChild(headingForecast);
            sectionForecast.appendChild(imgForecast);
            sectionForecast.appendChild(paraForecast);

            weatherForecast.appendChild(sectionForecast);
        }
    });
}
document.getElementById('closeBtn').addEventListener('click', closeAlert);

function closeAlert() {
    const alertElement = document.getElementById('alert');
    const alertMessage = document.querySelector('#alert-message');

    // Check if there is an alert message before displaying the close button
    if (alertMessage.innerHTML.trim() !== '') {
        alertElement.style.display = 'none';
    }
}
