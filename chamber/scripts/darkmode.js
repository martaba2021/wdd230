const darkMode = document.getElementById('mode');
const body = document.body;

darkMode.addEventListener('change', () => {
  if (darkMode.checked) {
    body.classList.add('theme-dark');
  } else {
    body.classList.remove('theme-dark');
  }
});
function toggleDarkMode() {
const darkThemeLink = document.getElementById('dark-theme-link');
  if (darkThemeLink) {
    // Dark mode CSS is already loaded, so remove it to switch back to the light theme.
    darkThemeLink.parentNode.removeChild(darkThemeLink);
} else {
    // Dark mode CSS is not loaded, so create a new link element and add it to the head.
    const link = document.createElement('link');
    link.id = 'dark-theme-link';
    link.rel = 'stylesheet';
    link.href = 'styles/dark-theme.css'; 
    document.head.appendChild(link);
}}
const darkModeButton = document.getElementById('dark-mode-button'); 
darkModeButton.addEventListener('click', toggleDarkMode);
  