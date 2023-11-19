document.addEventListener("DOMContentLoaded", function () {
    const lastVisit = localStorage.getItem("lastVisit");
  
    var currentDate = new Date();
  
    if (!lastVisit) {
        document.getElementById("visit-message").textContent =
        "Welcome! Let us know if you have any questions.";
    } 
    else {
        const timeDifference = currentDate - new Date(lastVisit);
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    if (daysDifference < 1) {
        document.getElementById("visit-message").textContent =
          "Back so soon! Awesome!";
      } else {
        var message =
          daysDifference === 1
            ? "day"
            : "days";
        document.getElementById("visit-message").textContent =
          "You last visited " + daysDifference + " " + message + " ago.";
      }
    }
  
    localStorage.setItem("lastVisit", currentDate.toString());
  });
  