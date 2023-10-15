const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const events = document.querySelector("#events");
const weather = document.querySelector('#weather');
const spotlight = document.querySelector('#sponsors');

modeButton.addEventListener("click", () => {
    if (document.body.classList.toggle('dark')){
    else (document.body.classList.toggle(''));
});