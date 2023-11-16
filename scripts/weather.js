const currentTemp = document.querySelector('#temp-desc');
const weatherIcon = document.querySelector('#weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=13.98&lon=-89.56&units=imperial&appid=166fd1db0316d6728d136a8ed1d8912a';

async function apiFetch() {
    try{
        const response = await fetch(url);
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
apiFetch();

function displayResults(data) {
    let desc = data.weather[0].description;
    let temp = data.main.temp;
    currentTemp.innerHTML = `${temp.toFixed(0)}&deg;F - ${desc.toUpperCase()}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `weather icon - ${weather[0].icon}`)
}

