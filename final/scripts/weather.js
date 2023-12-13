const tempDesc = document.querySelector('#weather-desc');
const weatherIcon = document.querySelector('#weather-icon');
const weatherForecast = document.querySelector('#weather-forecast');
const alertMessage = document.querySelector('#alert-message');

const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42621&lon=-86.92234&units=imperial&appid=166fd1db0316d6728d136a8ed1d8912a';
const weatherForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42621&lon=-86.92234&units=imperial&cnt=15&appid=166fd1db0316d6728d136a8ed1d8912a';

async function apiFetchCurrent() {
    try {
        const response = await fetch(currentWeatherURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            apiFetchForecast(displayHighTempMessage); // Pass the callback function
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

async function apiFetchForecast(callback) {
    try {
        const response = await fetch(weatherForecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
            if (callback && typeof callback === 'function') {
                // Pass the current weather data to the callback function
                callback({
                    main: {
                        temp_max: data.list[0].main.temp_max // Assuming the high temperature is available in the forecast data
                    }
                });
            }
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

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

function displayHighTempMessage(data) {
    const highTempMessage = document.createElement('div');
    const maxTemp = data.main.temp_max;

    if (maxTemp !== undefined) {
        highTempMessage.innerHTML = `<p style="background-color: #f44336; color: white; padding: 15px;">High temperature today: ${maxTemp.toFixed(0)}&deg;F</p>`;
    } else {
        highTempMessage.innerHTML = '<p style="color: #f44336;">Unable to retrieve high temperature data.</p>';
    }

    // Add close button to the message
    const closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';  // '×' character for the close button
    closeButton.style.float = 'right';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '20px';

    // Add event listener to close the message
    closeButton.addEventListener('click', function () {
        highTempMessage.style.display = 'none';
    });

    highTempMessage.appendChild(closeButton);

    // Insert the message at the top of the page
    document.body.insertBefore(highTempMessage, document.body.firstChild);
}
