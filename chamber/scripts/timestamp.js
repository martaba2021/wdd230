document.addEventListener("DOMContentLoaded", function () {
    var timestampInput= document.getElementById("timestamp");
    var currentTime = new Date();
    var timestamp = currentTime.toISOString().slice().replace("T", " ");

    timestampInput.textContent = timestamp;
});