const tempDesc = document.querySelector('#weather-desc');
const weatherIcon = document.querySelector('#weather-icon');
const weatherForecast = document.querySelector('#weather-forecast');
const alertMessage = document.querySelector('#alert-message');

const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42621&lon=-86.92234&units=imperial&appid=166fd1db0316d6728d136a8ed1d8912a';
const weatherForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42621&lon=-86.92234&units=imperial&cnt=5&appid=166fd1db0316d6728d136a8ed1d8912a';

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
    let title = data.weather[0].main;
    let desc = data.weather[0].description;
    let icon = data.weather[0].icon;
    let temp = data.main.temp;
    let humidity = data.main.humidity;

    tempDesc.innerHTML = `<h3>${title}</h3><br>${temp.toFixed(0)}&deg;F ${desc} <br>${humidity}% humidity`;

    const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `weather icon - ${icon}`);
}

async function apiFetchForecast(callback) {
    try {
        const response = await fetch(weatherForecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
            if (callback && typeof callback === 'function') {
                callback({
                    main: {
                        temp_max: data.list[0].main.temp_max 
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
        highTempMessage.innerHTML = `
            <p class="high-temp-message">
                Today's High Temperature: ${maxTemp.toFixed(0)}&deg;F
                <span class="close-button" onclick="this.parentNode.style.display='none';">&times;</span>
            </p>
        `;
    } else {
        highTempMessage.innerHTML = '<p class="high-temp-message">Unable to retrieve high temperature data.</p>';
    }

    // Insert the message at the top of the page
    document.body.insertBefore(highTempMessage, document.body.firstChild);
}
