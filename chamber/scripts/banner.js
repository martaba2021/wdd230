const closeBanner = document.querySelector('#close-banner');

if (closeBanner) {
    const currentDay = new Date().getDay()
        if (currentDay >= 4 | currentDay === 0)
        {
            closeBan();
        }
        else {
            closeBanner.addEventListener('click', closeBan);
        }
}
function closeBan() {
    closeBanner.closest('.banner').style.display = "none";
}