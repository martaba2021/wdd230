const tempDesc = document.querySelector('#weather-desc');
const weatherIcon = document.querySelector('#weather-icon');
const weatherForecast = document.querySelector('#weather-forecast');


const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.46&lon=-83.65&units=imperial&appid=166fd1db0316d6728d136a8ed1d8912a';
const weatherForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.46&lon=-83.65&units=imperial&cnt=24&appid=166fd1db0316d6728d136a8ed1d8912a';

async function apiFetchCurrent() {
    try{
        const response = await fetch(currentWeatherURL);
        if (response.ok) {
            const data = await response.json();
            //console.log(data)
            displayResults(data);
        }
        else {
            throw Error(await response.text ());
        }
    }
    catch (error) {
        console.log(error);
    }
}
apiFetchCurrent();

function displayResults(data) {
    let desc = data.weather[0].description;
    let temp = data.main.temp;
    tempDesc.innerHTML = `${temp.toFixed(0)}&deg;F - ${desc.toUpperCase()}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `weather icon - ${data.weather[0].icon}`)
}

async function apiFetchForecast() {
    try{
        const response = await fetch(weatherForecastURL);
        if (response.ok) {
            const data = await response.json();
            //console.log(data)
            displayForecast(data);
        }
        else {
            throw Error(await response.text ());
        }
    }
    catch (error) {
        console.log(error);
    }
}
apiFetchForecast();

function displayForecast(data) {

    let dataList = data.list;

    dataList.forEach((data, index) => {

        if( data.dt_txt.split(" ")[1].split(":")[0] == "09"){

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
        paraForecast.innerHTML = `${data.main.temp}&deg;F`;

        sectionForecast.appendChild(headingForecast);
        sectionForecast.appendChild(imgForecast);
        sectionForecast.appendChild(paraForecast);

        weatherForecast.appendChild(sectionForecast);
    
        }
    });
}

