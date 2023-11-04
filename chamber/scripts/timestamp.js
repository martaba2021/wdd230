document.addEventListener("DOMContentLoaded", function () {
    var timestampElement = document.getElementById("timestamp");
    var currentTime = new Date();
    var timestamp = currentTime.toISOString();
    
    timestampElement.textContent = timestamp;
});