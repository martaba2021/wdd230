const temperature = document.getElementById("temp");
const windSpeed = document.getElementById("windspeed");
const windChill = document.getElementById("windchill");

if (temperature.value !== "" && windSpeed.value !== "") {
    const tempF = parseFloat(temperature.value);
    const speed = parseFloat(windSpeed.value);

    // Check if the temperature and wind speed are within specification limits
    if (tempF <= 50 && speed > 3.0) {
        const windChillValue = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
        windChill.textContent = windChillValue.toFixed(2) + " °F";
    } 
    else {
        windChill.textContent = "N/A";
    }}
