// Select the button
const modeButton = document.querySelector("#mode");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
modeButton.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "light-theme.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "dark-theme.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "light-theme.css";
  }
});